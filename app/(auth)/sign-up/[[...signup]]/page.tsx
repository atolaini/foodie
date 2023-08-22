import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className='flex justify-center items-center'>
      <SignUp
        afterSignUpUrl='/onboarding'
        redirectUrl='/onboarding'
      />
    </div>
  );
};

export default SignUpPage;
