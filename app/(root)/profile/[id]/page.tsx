import { currentUser } from '@clerk/nextjs';

import { getUser } from '@/lib/actions/user.actions';

import ProfileDetails from '@/components/profile_page/profileDetails';

const ProfilePage = async () => {
  const user = await currentUser();

  if (!user) {
    return;
  }

  const userFromDB = await getUser(user.id);

  return (
    <>
      <ProfileDetails userDetails={userFromDB} />
    </>
  );
};

export default ProfilePage;
