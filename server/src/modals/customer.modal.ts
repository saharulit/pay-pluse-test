import mongoose, { Schema } from 'mongoose';
import { ICustomer } from './type';

const customerSchema: Schema<ICustomer> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    birthdate: {
      type: Date,
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model<ICustomer>('Customer', customerSchema);

export default Customer;
