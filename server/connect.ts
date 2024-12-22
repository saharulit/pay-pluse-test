import mongoose from 'mongoose';

const uri =
  'mongodb+srv://saharulit:zA3bJcUzRDPgJF6X@pay-plus-project.duw36.mongodb.net/?retryWrites=true&w=majority&appName=pay-plus-project';
//Should be in env file

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log('Error connecting to MongoDB:', (err as Error).message);
  }
};
