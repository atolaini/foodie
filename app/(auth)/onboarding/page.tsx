import { currentUser } from '@clerk/nextjs';

import Card from '@/components/ui/Card';
import UserProfileForm from '@/components/forms/UserProfileForm';

export default async function OnBoarding() {
  const user = await currentUser();

  console.log(user);

  return (
    <div className='flex flex-col items-center max-w-[60rem] m-auto'>
      <h1>
        Setup your <span>profile</span>
      </h1>
      <p>
        Complete you profile with your food interests, profile image and a
        little something about yourself.
      </p>
      <Card className='w-full'>
        {user ? (
          <UserProfileForm user={user} />
        ) : (
          <h3>Opps...Looks like something went wrong!</h3>
        )}
      </Card>
    </div>
  );
}
