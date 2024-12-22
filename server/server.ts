import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { authenticationRoute } from './src/routes/authenticationRoute';
import { connectMongoDB } from './connect';

const app = express();
const PORT = 3010;
const DB_CONNECTION_STRING =
  'mongodb://saharulit:gXV9cTVbeOw6PCzm@pay-plus-shard-00-00.au5ac.mongodb.net:27017,pay-plus-shard-00-01.au5ac.mongodb.net:27017,pay-plus-shard-00-02.au5ac.mongodb.net:27017/?replicaSet=atlas-d2hxdw-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority';
//USE ENV
connectMongoDB(DB_CONNECTION_STRING);

app.use(cors());
app.use(express.json());

app.use('/api/auth', authenticationRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
