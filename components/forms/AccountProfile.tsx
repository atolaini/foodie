'use client';

import { useForm, type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import * as z from 'zod';
import type {} from '@clerk/types';

import { userValidation } from '@/lib/validations/users';
import { createUser } from '@/lib/actions/user.actions';
import { cuisines } from '@/constants/constants';

import { Input, Textarea, Checkbox, FormControl } from './ui/Inputs';
import Button from '../ui/Button';

interface AccountProfileProps {
  user: User;
}

const AccountProfile = ({ user }: AccountProfileProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(userValidation),
    defaultValues: {
      name: user.firstName || '',
      username: '',
      bio: '',
      favourite_cuisines: [],
    },
  });

  const router = useRouter();

  const onSubmitHandler = async (data: z.infer<typeof userValidation>) => {
    const favouriteCusinesArr = data.favourite_cuisines;
    const toString = favouriteCusinesArr?.toString();

    createUser({
      clerkId: user.id,
      name: data.name,
      username: data.username,
      bio: data.bio,
      favourite_cuisines: toString,
      onboarded: true,
      email: user.emailAddresses[0].emailAddress,
    });

    router.push(`/profile/${user.id}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Input
          type='text'
          label='Name'
          {...register('name')}
        />
        <Input
          type='text'
          label='Username'
          {...register('username')}
        />
        <Textarea
          label='Bio'
          {...register('bio')}
        />

        <FormControl label='Favourite cuisines'>
          <div className='flex flex-row flex-wrap gap-4 mt-4 mb-4 border-b-2 border-black-50 pb-4'>
            {cuisines.map((cuisine, index) => (
              <Checkbox
                key={index}
                label={cuisine.name}
                value={cuisine.name}
                {...register('favourite_cuisines')}
              />
            ))}
          </div>
        </FormControl>

        <Button
          type='submit'
          disabled={isSubmitting}
        >
          Submit form
        </Button>
      </form>
    </div>
  );
};

export default AccountProfile;
