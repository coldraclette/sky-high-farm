import Link from 'next/link';
'use client';
import { useRouter } from 'next/navigation';

import Logo from './components/Navigation/Logo';
import Menu from './components/Navigation/Menu';

export default function NotFound() {
  const router = useRouter();
  return (
    <div>
      <header>
        <Menu />
        <Logo />
      </header>
      <div className="relative flex h-screen w-full flex-col justify-between">
        <main className="flex flex-col h-full w-full items-center justify-center">
          <h1 className="text-lg mb-4">Not found :(</h1>
          <button className='border rounded p-2 hover:bg-green' type="button" onClick={() => router.back()}>
            Go back
          </button>
        </main>
      </div>
    </div>
  );
}
