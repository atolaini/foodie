'use server';

import { redirect } from '@clerk/nextjs/server';
import { prisma } from '../db';
import { User } from '../interfaces';

export const createUser = async (data: User) => {
  try {
    const user = await prisma.user.create({
      data: {
        clerkId: data.clerkId,
        email: data.email,
        name: data.name,
        username: data.username,
        bio: data.bio,
        onboarded: data.onboarded,
        favouriteCuisine: data.favourite_cuisines,
      },
    });
  } catch (error) {
    throw new Error(`Error creating new user: ${error}`);
  }
};

export const getUser = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        clerkId: id,
      },
    });
    return user;
  } catch (error) {
    throw new Error(`Error getting user: ${error}`);
  }
};
