/* eslint-disable consistent-return */
import { NextFunction } from 'express';
import passport from 'passport';

export const checkAuthenticated = (req: any, res: any, next: NextFunction): void => {
  console.log('Req', req);
  if (req.isAuthenticated()) { return next(); }
  res.redirect('login');
};

const checkLoggedIn = (req: any, res: any, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return res.status(200).json({ message: 'User already logged in' });
  }

  next();
};

export const authenticateLocal = (req: any, res: any, next: NextFunction) => {
  passport.authenticate('local', (passErr: any, user: any, info: any) => {
    if (passErr) {
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    req.logIn(user, (err: any) => {
      if (err) {
        return res.status(500).json({ message: 'Login failed' });
      }
      next();
    });
  })(req, res, next);
};
