import Link from 'next/link';
import { PortableText, PortableTextComponents } from '@portabletext/react';

interface TextContentProps {
  text: any;
  textSize?: string;
  color?: string;
}

export default function TextContent({
  text,
  textSize = 'text-size-1 md:leading-[39.6px] md:tracking-[0.36px]',
  color = '',
}: TextContentProps) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => (
        <p
          className={`mb-2 leading-[16.5px] tracking-[0.15px] ${textSize} ${color}`}
        >
          {children}
        </p>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul
          className={`${textSize} ${color} mb-2 list-disc leading-[16.5px] tracking-[0.15px] ml-5 md:ml-7`}
        >
          {children}
        </ul>
      ),
    },
    listItem: {
      bullet: ({ children }) => (
        <li
          className={`${textSize} ${color} mb-2 leading-[16.5px] tracking-[0.15px]`}
        >
          {children}
        </li>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith('/')
          ? 'noreferrer noopener'
          : undefined;
        const target = !value.href.startsWith('/') ? '_blank' : undefined;
        return (
          <Link
            className="underline"
            href={value.href}
            target={target}
            rel={rel}
          >
            {children}
          </Link>
        );
      },
    },
  };

  return (
    <div>
      <PortableText value={text} components={components} />
    </div>
  );
}
