import { urlForImage } from '../../../../../sanity/lib/image';
import {
  getJobPageData,
  getJobPageMetaData,
} from '../../../../../sanity/sanity.query';
import TextContent from '../../components/TextContent';

export const revalidate = 60;

export async function generateMetadata() {
  const { seoTitle, seoDescription, seoImage } = await getJobPageMetaData();

  return {
    title: {
      default: seoTitle,
    },
    description: seoDescription,
    openGraph: {
      type: 'website',
      url: 'skyhighfarm.org/job',
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
  const data = await getJobPageData();

  return (
    <div className="px-5 md:px-6">
      {data.jobOpenings &&
        data.jobOpenings.map((jobOpening: any) => (
          <div
            key={jobOpening._key}
            className="mb-8 grid gap-4 md:mb-16 lg:grid-cols-[1fr_2fr]"
          >
            <div>
              <h2 className="text-size-1">{jobOpening.title}</h2>
              <h3 className="text-size-1 text-green">
                {jobOpening.additionalInfo}
              </h3>
            </div>
            <TextContent text={jobOpening.description} />
          </div>
        ))}
      <div>
        <p className={`text-size-1 mb-4 md:mb-8`}>
          {data.jobOpenings ? data.jobOpeningsText : data.noJobOpeningsText}
        </p>
        <TextContent text={data.singUpText} />
      </div>
    </div>
  );
}
