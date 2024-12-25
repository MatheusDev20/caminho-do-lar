import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '../presentation/errors/AppError';
import authConfig from '../config/auth/login-token';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function authorization(request: Request, response: Response, next: NextFunction):
  void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('User is not Logged in ( Token is not provided )', 401);
  }

  const [, token] = authHeader.split(' ');
  const { secret } = authConfig;
  try {
    const decoded = verify(token, secret);
    const { sub } = decoded as TokenPayload;
    request.user = {
      id: sub,
    };
    return next();
  } catch (err) {
    throw new AppError('Token is not valid', 401);
  }
}
