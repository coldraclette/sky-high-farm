'use client';

import { useRouter } from 'next/navigation';

interface BackButtonProps {
  path: string;
}

export default function BackButton({ path }: BackButtonProps) {
  const router = useRouter();
  return (
    <a
      className="cursor-pointer text-[25px] md:text-[30px]"
      onClick={() => router.push(path)}
    >
      X
    </a>
  );
}
