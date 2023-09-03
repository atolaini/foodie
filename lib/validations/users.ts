import * as z from 'zod';

export const userValidation = z.object({
  profile_image: z.string().url().optional(),
  name: z.string().optional(),
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long' }),
  bio: z.string().max(250).optional(),
  favourite_cuisines: z.array(z.string()).optional(),
});
