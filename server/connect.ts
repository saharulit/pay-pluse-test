import mongoose from 'mongoose';

const uri =
  'mongodb+srv://saharulit:gXV9cTVbeOw6PCzm@pay-plus.au5ac.mongodb.net/pay-plus-test?retryWrites=true&w=majority';

//Should be in env file

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log('Error connecting to MongoDB:', (err as Error).message);
  }
};
