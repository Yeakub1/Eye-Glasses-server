import { TEyeglasses } from './product.interface';
import { Schema } from 'mongoose';
import { model } from 'mongoose';

const eyeglassesSchema = new Schema<TEyeglasses>(
  {
    productName: { type: String, required: true},
    productPrice: { type: Number, required: true},
    productQuantity: { type: Number, required: true},
    productImage: { type: String, required: true },
    frameMaterial: {
      type: String,
      enum: ['metal', 'plastic', 'plastic'],
      required: true,
    },
    frameShape: {
      type: String,
      enum: ['rectangular', 'round', 'cat-eye'],
      required: true,
    },
    lensType: { type: String, required: true },
    brand: { type: String, required: true },
    gender: {
      type: String,
      enum: ['men', 'women', 'unisex'],
      required: true,
    },
    color: { type: String, required: true },
    userEmail: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Eyeglass = model<TEyeglasses>('Eyeglass', eyeglassesSchema);
