import * as React from 'react';

import { InputProps, TextareaProps, RadioProps } from '@/lib/interfaces';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, label, ...props }, ref) => {
    return (
      <div className='flex flex-col items-start mb-5'>
        <label className='text-text font-medium mb-1'>{label}</label>
        <input
          type={type}
          className='border-2 transition duration-2000 border-text-20 bg-transparent rounded-md p-2 w-full focus:border-secondary focus:outline-none'
          {...props}
          ref={ref}
        />
      </div>
    );
  }
);

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className='flex flex-col items-start mb-5'>
        <label className='text-text font-medium mb-1'>{label}</label>
        <textarea
          className='border-2 transition duration-2000 border-text-20 bg-transparent rounded-md p-2 w-full focus:border-secondary focus:outline-none'
          {...props}
          ref={ref}
        />
      </div>
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

Checkbox.displayName = 'Checkbox';
Textarea.displayName = 'Textarea';
Input.displayName = 'Input';
