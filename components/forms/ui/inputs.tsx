import * as React from 'react';
import Image from 'next/image';

const ImageIcon = require('react-feather/dist/icons/image').default;

import {
  InputProps,
  TextareaProps,
  RadioProps,
  FormControlProps,
  ImageUploadProps,
} from '@/lib/interfaces';

export const FormControl = ({
  children,
  label,
  className,
}: FormControlProps) => {
  return (
    <div className={`flex flex-col items-start mb-5 ${className}`}>
      <label className='text-text font-medium mb-1'>{label}</label>
      {children}
    </div>
  );
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, label, ...props }, ref) => {
    return (
      <FormControl label={label}>
        <input
          type={type}
          className='border-2 transition duration-2000 border-text-20 bg-transparent rounded-md p-2 w-full focus:border-secondary focus:outline-none'
          {...props}
          ref={ref}
        />
      </FormControl>
    );
  }
);

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, ...props }, ref) => {
    return (
      <FormControl label={label}>
        <textarea
          className='border-2 transition duration-2000 border-text-20 bg-transparent rounded-md p-2 w-full focus:border-secondary focus:outline-none'
          {...props}
          ref={ref}
        />
      </FormControl>
    );
  }
);

export const Checkbox = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, ...props }, ref) => {
    return (
      <>
        <label className='text-text font-medium mb-1 radio-button'>
          <input
            type='checkbox'
            value={label}
            {...props}
            ref={ref}
          />
          <span className='z-1 relative'>{label}</span>
        </label>
      </>
    );
  }
);

export const ImageUpload = React.forwardRef<HTMLInputElement, ImageUploadProps>(
  ({ label, img_url }, ref) => {
    return (
      <div className='flex items-center gap-4 pb-4 border-b-2 border-greyLight mb-5'>
        {!img_url ? (
          <div className='w-[50px] h-[50px] border-accent border-2 flex items-center justify-center rounded-full'>
            <ImageIcon />
          </div>
        ) : (
          <div className='w-[50px] h-[50px] border-accent border-2 flex items-center justify-center rounded-full'>
            <Image
              src={img_url}
              alt='profile image'
              width={100}
              height={100}
              objectFit='contain'
            />
          </div>
        )}
        <FormControl label={label}>
          <input
            type='file'
            className='border-2 transition duration-2000 border-text-20 bg-transparent rounded-md p-2 w-full focus:border-secondary focus:outline-none'
            ref={ref}
          />
        </FormControl>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
Textarea.displayName = 'Textarea';
Input.displayName = 'Input';
ImageUpload.displayName = 'ImageUpload';
