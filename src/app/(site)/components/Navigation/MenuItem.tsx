'use client';

import Link from 'next/link';

import useWindowSize from '../../hooks/useWindowSize';

interface MenuItemProps {
  path: string;
  title: string;
  mobileTitle?: string;
  external?: boolean;
  onItemClick?: () => void;
}

export default function MenuItem({
  path,
  title,
  mobileTitle = title,
  external = false,
  onItemClick,
}: MenuItemProps) {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width ? windowSize.width < 770 : false; // 1024
  return (
    <li>
      <Link
        className="relative transition-colors hover:italic"
        href={path}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        onClick={onItemClick}
      >
        {isMobile ? mobileTitle : title}
      </Link>
    </li>
  );
}
