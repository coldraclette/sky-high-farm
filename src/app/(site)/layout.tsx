import { Analytics } from '@vercel/analytics/react';

import { urlForImage } from '../../../sanity/lib/image';
import { getLandingPageMetaData } from '../../../sanity/sanity.query';
import GoogleTag from './components/GoogleTag';

import './globals.css';

import MonumentGrotesk from 'next/font/local';

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
  const { seoTitle, seoDescription, seoImage } = await getLandingPageMetaData();

  return {
    title: {
      default: seoTitle,
    },
    description: seoDescription,
    openGraph: {
      type: 'website',
      url: 'skyhighfarm.org',
      title: seoTitle,
      description: seoDescription,
      siteName: 'skyhighfarm.org',
      images: [
        {
          url: urlForImage(seoImage),
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
      <GoogleTag trackingId="G-2HJLYLJHD4" />
      <body className="h-full w-full">{children}</body>
      <Analytics />
    </html>
  );
}
