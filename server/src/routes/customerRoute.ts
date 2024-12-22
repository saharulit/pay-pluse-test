import { Router } from 'express';
import {
  getUserCustomer,
  createUserCustomer,
} from '../controllers/customerController';

export const customerRoute = Router();
customerRoute.get('/', getUserCustomer);
customerRoute.post('/', createUserCustomer);
