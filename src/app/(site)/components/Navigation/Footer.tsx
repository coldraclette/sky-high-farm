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
      className={`flex items-end justify-between p-4 md:text-xl ${textColor} ${
        fixed ? 'fixed bottom-0 w-full' : 'relative'
      }`}
    >
      <ul className="flex gap-2 md:mb-3 md:gap-8">
        <MenuItem path="/contact" title="Contact" />
        <MenuItem path="/jobs" title="Jobs" />
        <MenuItem
          path="https://www.instagram.com/skyhighfarmhudsonvalley/?hl=en"
          title="Instagram"
          mobileTitle="IG"
          external
        />
      </ul>
      <a
        href="https://www.paypal.com/fundraiser/charity/1501452"
        target="_blank"
        className="fixed bottom-3 right-4 z-20"
      >
        {!isMobile ? (
          <Image src="/donate1.png" width={200} height={88} alt="donate" />
        ) : (
          <Image src="/donate1.png" width={90} height={41.25} alt="donate" />
        )}
      </a>
    </footer>
  );
}
