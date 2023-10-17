import Image from 'next/legacy/image';

import { urlForImage, urlForImageBlur } from '../../../../../sanity/lib/image';
import {
  getContactPageData,
  getContactPageMetaData,
} from '../../../../../sanity/sanity.query';
import PageTitle from '../../components/PageTitle';
import TextContent from '../../components/TextContent';

export const revalidate = 60;

export async function generateMetadata() {
  const { seoTitle, seoDescription, seoImage } = await getContactPageMetaData();

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
  const data = await getContactPageData();

  if (data.backgroundImage && data.backgroundImage.asset) {
    return (
      <>
        <div className="fixed left-0 top-0 z-10 h-screen w-full bg-black/10"></div>
        <Image
          alt={data.backgroundImage.alt}
          src={urlForImage(data.backgroundImage)}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={urlForImageBlur(data.backgroundImage)}
        />
        <div className="relative z-10 px-5 md:px-6">
          {data.showPageTitle && (
            <PageTitle pageTitle={data.pageTitle} color="text-white" />
          )}
          <TextContent text={data.textContent} color="text-white" />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative px-5 md:px-6">
        {data.showPageTitle && <PageTitle pageTitle={data.pageTitle} />}
        <TextContent text={data.textContent} />
      </div>
    </>
  );
}
