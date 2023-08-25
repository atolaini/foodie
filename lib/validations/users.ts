import * as z from 'zod';

export const userValidation = z.object({
  name: z.string().min(3).max(50).optional(),
  username: z.string().min(3).max(50).optional(),
  bio: z.string().max(250).optional().optional(),
  favourite_cuisines: z.array(z.string()).optional(),
});
