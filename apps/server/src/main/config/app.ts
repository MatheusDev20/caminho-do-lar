/* eslint-disable import/no-extraneous-dependencies */
import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import setupMiddlewares from './app-middlewares';
import setupPassport from './passport';

const app = express();

setupMiddlewares(app);
setupPassport();

export default app;
