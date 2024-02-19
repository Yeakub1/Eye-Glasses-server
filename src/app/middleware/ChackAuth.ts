import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import config from '../config';
import { JwtPayload } from 'jsonwebtoken';
import { User } from '../modules/user/user.model';
import { verifyToken } from '../modules/user/user.utils';

const checkAuth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req?.headers?.authorization;
    if (!token) {
      throw new Error('You are not authorized!');
    }
    const decodedToken = verifyToken(token, config.jwt_access_token as string);

    // const { _id, username, email, role, iat, exp } = decodedToken as JwtPayload;
    const { _id } = decodedToken as JwtPayload;

    const checkUser = await User.findById(_id);
    if (!checkUser) {
      throw new Error('user not found !!!');
    }
    req.user = decodedToken as JwtPayload;
    next();
  });
};

export default checkAuth;
