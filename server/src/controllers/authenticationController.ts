import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../modals/user.modal';
import { IUser } from '../modals/type';
import { JWT_SECRET } from '../consts';

export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { ilId, fullName, email, password } = req.body;

    const existingUser = await User.findOne({ ilId });
    if (existingUser) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    const newUser = new User({
      ilId,
      fullName,
      email,
      password,
    } as IUser);
    await newUser.save();

    const token = generateToken(newUser._id.toString());

    res.status(201).json({ user: newUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { ilId, password } = req.body;

    const user = await User.findOne({ ilId });
    if (!user) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    const token = generateToken(user._id.toString());

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

const generateToken = (id: string): string => {
  return jwt.sign({ id }, JWT_SECRET as string, {
    expiresIn: '1h',
  });
};
