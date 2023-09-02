import Card from '../ui/Card';

const ProfileDetails = ({ userDetails }) => {
  return (
    <Card>
      <h3>
        Welcome <span> {userDetails.username} </span>
      </h3>
    </Card>
  );
};

export default ProfileDetails;
