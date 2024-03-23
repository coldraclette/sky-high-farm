import { urlForImage } from '../../../../../sanity/lib/image';
import {
  getEventsPageData,
} from '../../../../../sanity/sanity.query';
import HeaderImage from '../../components/HeaderImage';
import HeaderImageTitleAndAlt from '../../components/HeaderImageTitleAndAlt';
import ProgrammingProjectItem from '../../components/Programming/ProgrammingProjectItem';
import TextContent from '../../components/TextContent';
import { composeClassNames } from '../../utils';

export const revalidate = 60;

export async function generateMetadata() {
  const { seoTitle, seoDescription, seoImage } =
    await getEventsPageData();

  if (!seoTitle || !seoDescription || !seoImage) {
    return null;
  }

  return {
    title: {
      default: seoTitle,
    },
    description: seoDescription,
    openGraph: {
      type: 'website',
      url: 'skyhighfarm.org/events',
      title: seoTitle,
      description: seoDescription,
      siteName: 'skyhighfarm.org',
      images: [
        {
          url: urlForImage(seoImage),
          width: 1200,
          height: 630,
          alt: '',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function Page() {
  const data = await getEventsPageData();
  const columns = data?.showFourColumns ? 4 : 3;
  const projects = data?.projects;

  const image = data?.headerImage;
  const imageAlt = data?.headerImage?.alt;
  const imageCredit = data?.headerImage?.credit;
  const title = data?.pageTitle;
  const titlePosition = data?.titlePosition;
  const textContent = data?.textContent;

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
        <div className="mb-4 md:mb-8">
          <div
            className={composeClassNames(
              'mt-4 grid gap-6 md:mt-8 md:grid-cols-2',
              {
                'lg:grid-cols-3': columns === 3,
                'lg:grid-cols-3 xl:grid-cols-4': columns === 4,
              }
            )}
          >
            {projects?.map((project: any, index: any) => {
              return (
                <ProgrammingProjectItem
                  key={project.slug + index}
                  project={project}
                  event={true}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
