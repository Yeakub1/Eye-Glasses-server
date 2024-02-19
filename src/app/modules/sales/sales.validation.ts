import { z } from 'zod';

const createSalesValidationSchema = z.object({
  body: z.object({
    productId: z.string({ required_error: 'ProductId is required.' }),
    quantity: z.number({ required_error: 'quantity is required.' }),
    buyerName: z.string({ required_error: 'buyerName is required.' }),
    saledata: z.string({ required_error: 'saledata is required.' }),
    userEmail: z.string({ required_error: 'userEmail is required.' }),
    role: z.enum(['user', 'manager']),
  }),
});

export const SalesZodValidations = {
  createSalesValidationSchema,
};
