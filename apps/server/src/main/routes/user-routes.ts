/* eslint-disable consistent-return */
import { Router, Request, Response } from 'express';
import multer from 'multer';
import { body, query } from 'express-validator';
import * as factories from '../factories/users-factory';
import { Controller } from '../../presentation/protocols/controller';
import uploadConfig from '../../config/storage/upload';
import { logIn, checkAuth } from '../middlewares/check-auth';

const adapt = (controller: Controller) => async (req: Request, res: Response) => {
  await controller.handle(req, res);
};

const upload = multer(uploadConfig);
export default (router: Router): void => {
  router.post(
    '/signup',
    body('name').notEmpty().isLength({ max: 24 }),
    body('password').notEmpty().isLength({ min: 8 }),
    body('email').notEmpty().isEmail(),
    body('petPreference').notEmpty(),
    adapt(factories.makeSignUpUserController()),
  );

  router.delete(
    '/user/delete',
    checkAuth,
    adapt(factories.makeDeleteUserController()),
  );

  router.post(
    '/login',
    logIn,
    body('username').notEmpty().isEmail(),
    body('password').notEmpty().isLength({ min: 8 }),
  );

  router.delete('/logout', (req: any, res) => {
    req.logout((err: any) => {
      if (err) {
        return res.status(500).json({ message: 'Logout failed' });
      }
      req.session.destroy(() => {
        res.clearCookie('connect.sid'); // Clear the session cookie
        return res.status(200).json({ message: 'Logged out successfully' });
      });
    });
  });

  router.post('/avatar', checkAuth, upload.single('avatar'), adapt(factories.makeAvatarUpload()));
  router.get('/getProfile', checkAuth, adapt(factories.makeUserProfile()));

  // Reset Password Routes
  router.post('/forgot-password', query('email').notEmpty().isEmail(), adapt(factories.makeForgotPasswordController()));
  router.patch(
    '/reset-password',
    body('token').notEmpty().isLength({ min: 16 }),
    body('newPassword').notEmpty().isLength({ min: 8 }),
    adapt(factories.makeResetPasswordController()),
  );
};
