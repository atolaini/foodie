import { currentUser } from '@clerk/nextjs';

import AccountProfile from '@/components/forms/accountProfile';
import Card from '@/components/ui/card';

export default async function OnBoarding() {
  const user = await currentUser();

  return (
    <>
      <h1>
        Setup your <span>profile</span>
      </h1>
      <p>
        Complete you profile with your food intereste, profile image and a
        little something about yourself.
      </p>
      <Card>
        <AccountProfile />
      </Card>
    </>
  );
}
