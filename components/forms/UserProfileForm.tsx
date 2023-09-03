'use client';

import { ChangeEvent, useState } from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUploadThing } from '@/lib/uploadthing';
import * as z from 'zod';

import {
  ImageUpload,
  Input,
  Textarea,
  FormControl,
  Checkbox,
} from './ui/inputs';
import Button from '../ui/Button';
import Link from 'next/link';
import { CurrentUser } from '@/lib/interfaces';
import { userValidation } from '@/lib/validations/users';
import { isBase64Image } from '@/lib/utils';

const UserProfileForm = ({ user }: CurrentUser) => {
  const name = user?.firstName + ' ' + user?.lastName;
  const { startUpload } = useUploadThing('media');

  const [files, setFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<z.infer<typeof userValidation>>({
    resolver: zodResolver(userValidation),
  });

  const onSubmitHandler = async (values: z.infer<typeof userValidation>) => {
    const blob = values.profile_image;

    const hasImageChanged = isBase64Image(blob);
    if (hasImageChanged) {
      const imgRes = await startUpload(files);

      if (imgRes && imgRes[0].fileUrl) {
        values.profile_image = imgRes[0].fileUrl;
      }
    }

    console.log(blob);
  };

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));

      if (!file.type.includes('image')) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || '';
        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <ImageUpload
        type='file'
        img_url=''
        label='Upload Profile image'
        {...register('profile_image')}
      />
      <Input
        label='Name'
        type='text'
        {...register('name')}
      />
      <Input
        label='User Name'
        type='text'
        {...register('username')}
      />
      <Textarea label='Bio' />
      <FormControl
        label='Favourite cuisines'
        className='border-y-2 py-4'
        {...register('favourite_cuisines')}
      >
        <Checkbox label='Italian' />
      </FormControl>
      <div className='flex flex-wrap gap-4'>
        <Button
          type='submit'
          className='w-full md:w-auto'
        >
          Submit
        </Button>
        <Link
          href='/profile'
          className='w-full md:w-auto'
        >
          <Button
            type='button'
            className='w-full md:w-auto'
          >
            Skip for now...
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default UserProfileForm;
