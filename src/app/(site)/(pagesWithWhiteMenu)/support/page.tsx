import Image from 'next/legacy/image';
import Link from 'next/link';

import { urlForImage, urlForImageBlur } from '../../../../../sanity/lib/image';
import {
  getSupportPageData,
  getSupportPageMetaData,
} from '../../../../../sanity/sanity.query';
import TextContent from '../../components/TextContent';

export const revalidate = 60;

export async function generateMetadata() {
  const { seoTitle, seoDescription, seoImage } = await getSupportPageMetaData();

  return {
    title: {
      default: seoTitle,
    },
    description: seoDescription,
    openGraph: {
      type: 'website',
      url: 'skyhighfarm.org/support',
      title: seoTitle,
      description: seoDescription,
      siteName: 'skyhighfarm.org',
      images: [
        {
          url: seoImage ? urlForImage(seoImage) : '/skyhighfarm-logo.png',
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

export default async function Page() {
  const data = await getSupportPageData();

  const { textContent, link, backgroundImage } = data;
  return (
    <div>
      <div className="h-full w-full object-cover">
        <Image
          alt={backgroundImage.alt}
          src={urlForImage(backgroundImage)}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={urlForImageBlur(backgroundImage)}
        />
        <div className="relative z-[9] mt-40 max-w-[1200px] px-5 md:px-6">
          <TextContent text={textContent} color="text-white" />
          <div className="-ml-2 flex md:-ml-5">
            <Link href={link} target="_blank" rel="noreferrer noopener">
              <div className="relative h-[50px] w-[140px] md:h-[100px] md:w-[250px]">
                <Image
                  src="/donate1.png"
                  alt="donate button"
                  width={250}
                  height={100}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
