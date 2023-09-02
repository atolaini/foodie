import { currentUser } from '@clerk/nextjs';

import Card from '@/components/ui/Card';
import AccountProfile from '@/components/forms/AccountProfile';

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
        <AccountProfile user={user} />
      </Card>
    </>
  );
}
