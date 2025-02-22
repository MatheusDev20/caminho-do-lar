/* eslint-disable @typescript-eslint/no-var-requires */
import express, { Express } from 'express';
import cors from 'cors';
import pg from 'pg';
import session from 'express-session';
import passport from 'passport';
import { jsonParser } from '../middlewares';
import upload from '../../config/storage/upload';

const PGSession = require('connect-pg-simple')(session);

const pgPool = new pg.Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
});

const store = new PGSession({ pool: pgPool, tableName: 'session' });
export default (app: Express): void => {
  app.use(session({
    store,
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: false, sameSite: 'strict' }, // PRD
    cookie: {
      sameSite: 'strict', // Allow cookies across different ports
      secure: false, // No need for secure in local development
    },
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use('/files', express.static(upload.directory));
  app.use(jsonParser);
  app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent and received
  }));
};
