import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { authenticationRoute } from './src/routes/authenticationRoute';
import { connectMongoDB } from './connect';

const app = express();
const PORT = 3010;
//USE ENV
connectMongoDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authenticationRoute);
app.use('/api/customer', authenticationRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
