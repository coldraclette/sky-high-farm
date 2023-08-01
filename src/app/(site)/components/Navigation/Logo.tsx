import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <div className="fixed right-4 top-0 z-30 mt-4 md:right-1/2 md:translate-x-1/2">
        <Image
          priority
          src="/skyhighfarm-logo.png"
          alt="logo"
          width={110}
          height={110}
        />
      </div>
    </Link>
  );
}
