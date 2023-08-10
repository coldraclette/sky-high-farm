import { urlForImage } from '../../../../../sanity/lib/image';
import {
  getVolunteerPageData,
  getVolunteerPageMetaData,
} from '../../../../../sanity/sanity.query';
import TextContent from '../../components/TextContent';

export const revalidate = 60;

export async function generateMetadata() {
  const { seoTitle, seoDescription, seoImage } =
    await getVolunteerPageMetaData();

  return {
    title: {
      default: seoTitle,
    },
    description: seoDescription,
    openGraph: {
      type: 'website',
      url: 'skyhighfarm.org/volunteer',
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
  const data = await getVolunteerPageData();

  return (
    <div className="px-5 md:px-6">
      <TextContent text={data.textContent} greenTitles={true} />
    </div>
  );
}
