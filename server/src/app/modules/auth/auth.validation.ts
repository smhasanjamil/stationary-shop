import { z } from 'zod';

const loginvalidationSchema = z.object({
  email: z.string({ required_error: 'email is required' }),
  password: z.string({
    required_error: 'password is required',
  }),
});

export const AuthValidation = {
  loginvalidationSchema,
};
