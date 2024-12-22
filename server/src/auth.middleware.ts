import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IUser } from './modals/type';
import User from './modals/user.modal';
import { JWT_SECRET } from './consts';
interface AuthRequest extends Request {
  [x: string]: any;
  user?: IUser;
}

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.token;
  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token!' });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET as string) as {
      id: string;
    };

    // Attach the user to the request object
    const user = await User.findById(decoded.id).select('-password').exec();

    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json({ message: 'Not authorized, user not found' });
    }
  } catch (error) {
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};
