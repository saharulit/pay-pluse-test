import { Router } from 'express';
import {
  registerUser,
  loginUser,
} from '../controllers/authenticationController';

export const authenticationRoute = Router();
authenticationRoute.post('/register', registerUser);
authenticationRoute.post('/login', loginUser);
