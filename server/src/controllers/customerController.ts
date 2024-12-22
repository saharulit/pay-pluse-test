import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../modals/user.modal';
import { IUser } from '../modals/type';

export const getUserCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log(req);
  //take user details from request
  //get customers using user id
};

export const createUserCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log(req);
  //take user details from request
  //get customers using user id
};
