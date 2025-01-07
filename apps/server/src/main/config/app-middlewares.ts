import express, { Express } from 'express';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import { jsonParser } from '../middlewares';
import upload from '../../config/storage/upload';

export default (app: Express): void => {
  app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use('/files', express.static(upload.directory));
  app.use(jsonParser);
  app.use(cors());
};
