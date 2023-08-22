import Link from 'next/link';
import { auth } from '@clerk/nextjs';

import Button from '@/components/ui/button';
import Card from '@/components/ui/card';

export default async function Home() {
  const { userId } = await auth();

  const href = userId ? '/profile' : '/signup';

  return (
    <Card className='flex flex-col'>
      <h1>
        Friends through <span className='text-primary font-bold'>Food</span>
      </h1>
      <p>A place to find and share recipies and make friends while doing it.</p>
      <Link href={href}>
        <Button>Sign in</Button>
      </Link>
    </Card>
  );
}
