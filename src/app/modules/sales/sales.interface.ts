import { Types } from 'mongoose';

export type TSales = {
  productId: Types.ObjectId;
  quantity: number;
  buyerName: string;
  saledata: Date;
  userEmail: string;
  role: 'user' | 'manager';
};
