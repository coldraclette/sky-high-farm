import { groq } from 'next-sanity';

import { urlForImage } from '../../../../../sanity/lib/image';
import {
  getFellowshipPageData,
  getFellowshipPageMetaData,
} from '../../../../../sanity/sanity.query';
import StaffSection from '../../components/Team/StaffSection';
import TextContent from '../../components/TextContent';

export const revalidate = 60;

export async function generateMetadata() {
  const { seoTitle, seoDescription, seoImage } =
    await getFellowshipPageMetaData();

  return {
    title: {
      default: seoTitle,
    },
    description: seoDescription,
    openGraph: {
      type: 'website',
      url: 'skyhighfarm.org/fellowship',
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

export default async function Page() {
  const data = await getFellowshipPageData();
  return (
    <div className="px-5 md:px-6">
      <TextContent text={data.textContent} />
      {data.fellowSections.map((staff: any) => {
        return (
          <StaffSection key={staff._key} staff={staff} type={'fellowship'} />
        );
      })}
    </div>
  );
}
