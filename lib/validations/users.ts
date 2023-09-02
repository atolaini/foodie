import * as z from 'zod';

export const userValidation = z.object({
  name: z.string().optional(),
  username: z.string().optional(),
  bio: z.string().max(250).optional(),
  favourite_cuisines: z.array(z.string()).optional(),
});
