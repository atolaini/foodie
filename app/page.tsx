import Link from 'next/link';
import { auth } from '@clerk/nextjs';

import Logo from '@/components/navigation/Logo';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default async function Home() {
  const { userId } = await auth();

  const href = userId ? '/profile' : '/sign-up';

  return (
    <div className='flex justify-center align-top mt-20'>
      <Card className='flex flex-col'>
        <div className='flex justify-center mb-4'>
          <Logo />
        </div>
        <h1 className='text-medium'>
          Friends through <span className='text-primary font-bold'>Food</span>
        </h1>
        <p>
          A place to find and share recipies and make friends while doing it.
        </p>
        <Link
          href={href}
          className='self-start'
        >
          <Button>Get Started</Button>
        </Link>
      </Card>
    </div>
  );
}
