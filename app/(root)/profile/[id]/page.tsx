import { currentUser } from '@clerk/nextjs';

import { getUser } from '@/lib/actions/user.actions';
import { GET_RECIPES } from '@/lib/actions/recipes.actions';

import ProfileDetails from '@/components/profile_page/profileDetails';
import RecipeCarousel from '@/components/ui/carousel';

const ProfilePage = async () => {
  const user = await currentUser();

  if (!user) {
    return;
  }

  const userFromDB = await getUser(user.id);
  const tags = userFromDB?.favouriteCuisine?.split(',');
  const tagArr = Array.from(tags);
  const randomTag = tagArr[Math.floor(Math.random() * tagArr.length)];
  const recipes = await GET_RECIPES(randomTag.toLowerCase());

  console.log('this is recipes', recipes);

  return (
    <>
      <ProfileDetails userDetails={userFromDB} />
      <RecipeCarousel recipes={recipes} />
    </>
  );
};

export default ProfilePage;
