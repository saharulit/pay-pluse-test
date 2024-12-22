import mongoose from 'mongoose';

const uri =
  'mongodb+srv://sahar:gXV9cTVbeOw6PCzm@pay-plus.au5ac.mongodb.net/?retryWrites=true&w=majority&appName=pay-plus';

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log('Error connecting to MongoDB:', (err as Error).message);
  }
};
