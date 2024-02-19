import { z } from "zod";

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required.' }),
    email: z.string({ required_error: 'Email is required.' }).email(),
    password: z.string({ required_error: 'Password is required.' }),
    role: z.enum(['user', 'manager']).default('user'),
  }),
});

const loginValidationSchema = z.object({
    body: z.object({
  email: z.string({ required_error: "Email is required." }),
  password: z.string({ required_error: "Password is required" }),
}),
});

export const UserZodValidations = {
  createUserValidationSchema,
  loginValidationSchema,
};
