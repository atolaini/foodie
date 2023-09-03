import { ImageUpload } from '@/components/forms/ui/inputs';

// export interface User {
//   id: string;
//   clerkId: string;
//   email: string;
//   name: string;
//   username: string;
//   image?: string;
//   bio?: string;
//   onboarded: boolean;
//   createdRecipes: string[];
//   favouriteRecipes: string[];
//   favourite_cuisines: string;
// }

export interface CurrentUser {
  user: {
    id: string;
    firstName?: string | null;
    lastName?: string | null;
  };
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
  ref: React.ForwardedRef<HTMLInputElement>;
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  ref: React.ForwardedRef<HTMLInputElement>;
  label: string;
}

export interface FormControlProps {
  children: React.ReactNode;
  label: string;
  className?: string;
}

export interface ImageUploadProps extends InputProps {
  img_url?: string;
}
