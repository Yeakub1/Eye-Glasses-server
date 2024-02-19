import { Schema, model } from 'mongoose';
import { TSales } from './sales.interface';

const salesSchema = new Schema<TSales>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Eyeglass',
    },
    quantity: { type: Number, required: true },
    buyerName: { type: String, required: true },
    userEmail: { type: String, required: true },
    saledata: { type: Date, required: true },
    role: {
      type: String,
      enum: ['user', 'manager'],
      required: true,},
  },
  {
    timestamps: true,
  },
);

export const Sales = model<TSales>('Sale', salesSchema);
