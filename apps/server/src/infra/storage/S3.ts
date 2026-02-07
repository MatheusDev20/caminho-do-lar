/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { S3Client, PutObjectCommand, ListBucketsCommand } from '@aws-sdk/client-s3';
import path from 'path';
import fs from 'fs';
import buildPathS3 from './helpers/buildPathS3';
import upload from '../../config/storage/upload';
import { Storage } from '../../data/protocols/storage/storage';

class S3Storage implements Storage {
  private s3Client: S3Client;

  constructor() {
    this.s3Client = new S3Client({
      region: 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      },
    });
  }

  public async uploadMultipleFiles(filenames: string[], resource: string): Promise<any> {
    const promises = filenames.map(async (filename) => {
      const originalPath = path.resolve(upload.directory, filename);
      const fileContent = await fs.promises.readFile(originalPath);
      await this.s3Client.send(new PutObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: buildPathS3(filename, resource),
        ACL: 'public-read',
        Body: fileContent,
      }));

      return buildPathS3(filename, resource);
    });

    const res = await Promise.all(promises);
    return res;
  }

  public async uploadFile(fileName: string, resource: string): Promise<any> {
    const originalPath = path.resolve(upload.directory, fileName);
    const fileContent = await fs.promises.readFile(originalPath);

    await this.s3Client.send(new PutObjectCommand({
      Bucket: process.env.BUCKET_NAME,
      Key: buildPathS3(fileName, resource),
      ACL: 'public-read',
      Body: fileContent,
    }));
    return buildPathS3(fileName, resource);
  }

  async listBuckets(): Promise<any> {
    const response = await this.s3Client.send(new ListBucketsCommand({}));
    return response;
  }
}
export default S3Storage;
