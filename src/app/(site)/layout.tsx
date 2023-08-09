import './globals.css';

import { Inter } from 'next/font/google';
import MonumentGrotesk from 'next/font/local';

import Footer from './components/Navigation/Footer';
import Logo from './components/Navigation/Logo';
import Menu from './components/Navigation/Menu';

const monumentGrotesk = MonumentGrotesk({
  variable: '--font-sans',
  display: 'swap',
  src: [
    {
      path: '/fonts/MonumentGrotesk-Regular.ttf',
      weight: '400',
      style: 'normal',
    },

    {
      path: '/fonts/MonumentGrotesk-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export async function generateMetadata() {
  return {
    title: {
      default: 'Sky High Farm',
    },
    description:
      'Sky High Farm is a non-profit organization committed to addressing food security and nutrition by improving access to fresh, nutritious food for New Yorkers who are living in underserved communities by sustainably growing fresh fruits and vegetables and raising livestock exclusively for the purposes of donation.',
    openGraph: {
      type: 'website',
      url: 'skyhighfarm.org',
      title: 'Sky High Farm',
      description:
        'Sky High Farm is a non-profit organization committed to addressing food security and nutrition by improving access to fresh, nutritious food for New Yorkers who are living in underserved communities by sustainably growing fresh fruits and vegetables and raising livestock exclusively for the purposes of donation.',
      siteName: 'skyhighfarm.org',
      images: [
        {
          url: '/skyhighfarm-logo.png',
          width: 1200,
          height: 630,
          alt: 'sky high farm logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  searchParams: any;
}) {
  return (
    <html lang="en" className={monumentGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}
