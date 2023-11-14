import { urlForImage } from '../../../../../sanity/lib/image';
import {
  getAboutPageData,
  getAboutPageMetaData,
} from '../../../../../sanity/sanity.query';
import Timeline from '../../components/About/Timeline';
import HeaderImage from '../../components/HeaderImage';
import HeaderImageTitleAndAlt from '../../components/HeaderImageTitleAndAlt';
import TextContent from '../../components/TextContent';

export const revalidate = 86400; // 24 hours

export async function generateMetadata() {
  const { seoTitle, seoDescription, seoImage } = await getAboutPageMetaData();

  return {
    title: {
      default: seoTitle,
    },
    description: seoDescription,
    openGraph: {
      type: 'website',
      url: 'skyhighfarm.org/about',
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
  const data = await getAboutPageData();

  const image = data?.headerImage;
  const imageAlt = data?.headerImage?.alt;
  const imageCredit = data?.headerImage?.credit;
  const title = data?.pageTitle;
  const titlePosition = data?.titlePosition;
  const textContent = data?.textContent;
  const timeline = data?.timeline;
  const bottomText = data?.endTextBlock;

  return (
    <div>
      <HeaderImage
        image={image}
        alt={imageAlt}
        title={title}
        titlePosition={titlePosition}
      />
      <div className="px-5 md:px-6">
        <HeaderImageTitleAndAlt
          title={title}
          titlePosition={titlePosition}
          imageAlt={imageCredit}
        />
        <TextContent text={textContent} />
        <Timeline timeline={timeline} />
        <TextContent text={bottomText} textSize="text-xs md:text-[20px]" />
      </div>
    </div>
  );
}
