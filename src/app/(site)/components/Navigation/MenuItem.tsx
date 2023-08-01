import Link from 'next/link';

interface MenuItemProps {
  path: string;
  title: string;
  external?: boolean;
  onItemClick?: () => void;
}

export default function MenuItem({
  path,
  title,
  external = false,
  onItemClick,
}: MenuItemProps) {
  return (
    <li>
      <Link
        className="transition-colors hover:text-green"
        href={path}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        onClick={onItemClick}
      >
        {title}
      </Link>
    </li>
  );
}
