import Link from 'next/link';
import { auth } from '@clerk/nextjs';

import Button from '@/components/ui/button';
import Card from '@/components/ui/card';

export default async function Home() {
  const { userId } = await auth();

  const href = userId ? '/profile' : '/sign-up';

  return (
    <Card className='flex flex-col'>
      <h1 className='text-medium'>
        Friends through <span className='text-primary font-bold'>Food</span>
      </h1>
      <p>A place to find and share recipies and make friends while doing it.</p>
      <Link
        href={href}
        className='self-start'
      >
        <Button>Sign in</Button>
      </Link>
    </Card>
  );
}
