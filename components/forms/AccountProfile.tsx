'use client';

import { useForm, type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { userValidation } from '@/lib/validations/users';
import { cuisines } from '@/constants/constants';

import { Input, Textarea, Checkbox } from './ui/Inputs';
import Button from '../ui/Button';

const AccountProfile = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(userValidation),
    defaultValues: {
      name: '',
      username: '',
      bio: '',
      favourite_cuisines: [],
    },
  });

  const onSubmitHandler = async (data: FieldValues) => {
    console.log('values');
    console.log(data);

    reset();
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
        <div className='flex flex-row flex-wrap'>
          {cuisines.map((cuisine, index) => (
            <Checkbox
              key={index}
              label={cuisine.name}
              value={cuisine.name}
              {...register('favourite_cuisines')}
            />
          ))}
        </div>
        <Button type='submit'>Submit form</Button>
      </form>
    </div>
  );
};

export default AccountProfile;
