export interface User {
  id: string;
  clerkId: string;
  email: string;
  name: string;
  username: string;
  image: string;
  bio: string;
  onboarded: boolean;
  createdRecipes: string[];
  favouriteRecipes: string[];
  favouriteCusiines: string[];
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
