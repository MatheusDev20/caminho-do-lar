/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
import { NextFunction } from 'express';
import passport from 'passport';

export const checkAuth = (req: any, res: any, next: NextFunction): object | void => {
  if (req.isAuthenticated()) { return next(); }
  return res.status(401).json({ message: 'You are not authenticated to perform this request' });
};

export const checkLoggedIn = (req: any, res: any, next: NextFunction) => {
  if (req.isAuthenticated()) { return res.status(200).json({ message: 'User already logged in' }); }
  next();
};

export const logIn = (req: any, res: any, next: NextFunction) => {
  passport.authenticate('local', (passErr: any, user: any, info: any) => {
    if (passErr || !user) {
      return res.status(401).json({ message: info ? info.message : 'Unauthorized' });
    }

    req.logIn(user, (loginErr: any) => {
      if (loginErr) {
        return res.status(500).json({ message: 'Login failed' });
      }
      const {
        password, created_at, updated_at, ...authUser
      } = user;
      return res.status(200).json({ message: 'Logged in successfully', user: authUser });
    });
  })(req, res, next);
};
