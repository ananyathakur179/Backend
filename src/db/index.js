import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
  const mongoURI = `${process.env.MONGODB_URI}/${DB_NAME}`;

  try {
    const { connection } = await mongoose.connect(mongoURI);
    console.log(`MongoDB connected at host: ${connection.host}`);
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1); 
  }
};

export default connectDB;
