import { z } from "zod";

export const createEyeglassesSchema = z.object({
  body: z.object({
    productName: z.string({ required_error: 'Name is required.' }),
    productPrice: z.number({ required_error: 'Price is required.' }),
    productQuantity: z.number({ required_error: 'Quantity is required.' }),
    productImage: z.string({ required_error: 'Product Image is required.' }),
    frameMaterial: z.enum(['metal', 'plastic', 'plastic']),
    frameShape: z.enum(['rectangular', 'round', 'cat-eye']),
    lensType: z.string({ required_error: 'lens is required.' }),
    brand: z.string({ required_error: 'Brand is required.' }),
    gender: z.enum(['men', 'women', 'unisex']),
    color: z.string({ required_error: 'Color is required.' }),
    userEmail: z.string({ required_error: 'userEmail is required.' }),
  }),
});


export const updateValidatinEyeglassesSchema = z.object({
  body: z.object({
    productName: z.string({ required_error: 'Name is required.' }).optional(),
    productPrice: z.number({ required_error: 'Price is required.' }).optional(),
    productQuantity: z
      .number({ required_error: 'Quantity is required.' })
      .optional(),
    productImage: z
      .string({ required_error: 'Product Image is required.' })
      .optional(),
    frameMaterial: z.enum(['metal', 'plastic', 'plastic']).optional(),
    frameShape: z.enum(['rectangular', 'round', 'cat-eye']).optional(),
    lensType: z.string({ required_error: 'lens is required.' }).optional(),
    brand: z.string({ required_error: 'Brand is required.' }).optional(),
    gender: z.enum(['men', 'women', 'unisex']).optional(),
    color: z.string({ required_error: 'Color is required.' }).optional(),
    userEmail: z.string({ required_error: 'userEmail is required.' }).optional()
  }),
});

export const ProductValidation = {
  createEyeglassesSchema,
  updateValidatinEyeglassesSchema
};
