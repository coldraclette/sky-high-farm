import Link from 'next/link';
import { PortableText, PortableTextComponents } from '@portabletext/react';

interface TextContentProps {
  text: any;
  textSize?: string;
  color?: string;
  greenTitles?: boolean;
}

export default function TextContent({
  text,
  textSize = 'text-size-1 md:leading-[39.6px] md:tracking-[0.36px]',
  color = '',
  greenTitles = false,
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
          className={`${textSize} ${color} mb-2 ml-5 list-disc leading-[16.5px] tracking-[0.15px] md:ml-7`}
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
        if (!value.href) return <span>{children}</span>;
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
      strong: ({ children }) => (
        <strong className={`${greenTitles && 'text-green'}`}>{children}</strong>
      ),
    },
  };

  return (
    <div>
      <div className=" last-of-type:md:mr-48">
        <PortableText value={text} components={components} />
      </div>
    </div>
  );
}
