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
}
