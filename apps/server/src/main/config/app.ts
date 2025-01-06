/* eslint-disable import/no-extraneous-dependencies */
import 'reflect-metadata';
import 'express-async-errors';
import passport from 'passport';
import session from 'express-session';
import express from 'express';
import { Strategy as LocalStrategy, VerifyFunction } from 'passport-local';
import setupMiddlewares from './app-middlewares';
import UserRepository from '../../infra/db/postgres/repositories/user-repository';
import AuthorizationUseCase from '../../data/auth/login-usecase';
import { JwtAdapter } from '../../infra/criptography/jwt-adapter';

const usersRepository = new UserRepository();
const generateJwt = new JwtAdapter();
const authService = new AuthorizationUseCase(usersRepository, generateJwt);

const app = express();

setupMiddlewares(app);
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const verify: VerifyFunction = (username, password, done) => {
  authService.auth({ authInfo: { email: username, userPassword: password } })
    .then((user) => {
      const { authUser } = user;
      if (!user || authUser) { return done(null, false, { message: 'Incorrect email or password.' }); }
      return done(null, user);
    })

    .catch((err) => done(err));
};
// Passport configuration
const strategy = new LocalStrategy(verify);
passport.use(strategy);
passport.serializeUser((userObj, done) => {
  done(null, userObj);
});

passport.deserializeUser((userObj, done) => {
  done(null, userObj as any);
});

// passport.use();
export default app;
