'use client';

import Image from 'next/image';

import useWindowSize from '../../hooks/useWindowSize';
import MenuItem from './MenuItem';

interface FooterProps {
  textColor?: string;
  fixed?: boolean;
}

export default function Footer({
  textColor = 'text-black',
  fixed = false,
}: FooterProps) {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width ? windowSize.width < 770 : false; // 1024
  return (
    <footer
      className={`p-4 flex items-end justify-between md:text-xl ${textColor} ${
        fixed ? 'fixed bottom-0 w-full' : 'relative'
      }`}
    >
      <ul className="flex gap-2 md:mb-3 md:gap-8">
        <MenuItem path="/contact" title="Contact" />
        <MenuItem
          path="https://skyhighfarmuniverse.com/"
          title="Sky High Farm Universe"
          mobileTitle="SHF Universe"
          external
        />
        <MenuItem path="/jobs" title="Jobs" />
        <MenuItem
          path="https://www.instagram.com/skyhighfarmhudsonvalley/?hl=en"
          title="Instagram"
          mobileTitle="IG"
          external
        />
      </ul>
      <a
        href="https://www.paypal.com/donate?hosted_button_id=ZQZQYQZQZQZQZ"
        target="_blank"
        className="z-20"
      >
        {!isMobile ? (
          <Image src="/donate2.png" width={200} height={88} alt="donate" />
        ) : (
          <Image src="/donate2.png" width={90} height={41.25} alt="donate" />
        )}
      </a>
    </footer>
  );
}
