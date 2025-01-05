import 'reflect-metadata';
import 'express-async-errors';
import passport from 'passport';
import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import setupMiddlewares from './app-middlewares';
import UserRepository from '../../infra/db/postgres/repositories/user-repository';

const usersRepository = new UserRepository();
const app = express();

setupMiddlewares(app);

// Passport configuration

passport.use(
  new GoogleStrategy(
    {
      clientID: 'GOOGLE_CLIENT_ID',
      clientSecret: 'GOOGLE_CLIENT_SECRET',
      callbackURL: 'http://localhost:3000/auth/google/callback',
    },
    ((accessToken, refreshToken, profile, cb) => {
      const user = usersRepository.findById(profile.id);
      if (!user) {
        usersRepository.create({
          id: profile.id,
          name: profile.displayName,
          email: profile.emails ? profile.emails[0].value : '',
          password: '',
          petPreference: 'dogs',
          admin: false,
        });
      }
    }),
  ),
);
export default app;
