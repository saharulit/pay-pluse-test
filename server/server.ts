import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { authenticationRoute } from './src/routes/authenticationRoute';
import { customerRoute } from './src/routes/customerRoute';

import { connectMongoDB } from './connect';
import { authenticate } from './src/auth.middleware';

const app = express();
const PORT = 3010;
//USE ENV
connectMongoDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authenticationRoute);
app.use('/api/customer', authenticate, customerRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
