import { urlForImage } from '../../../../../sanity/lib/image';
import {
  getFirstProgrammingProjects,
  getFirstSpecialProjects,
  getNumberOfProgrammingProjects,
  getNumberOfSpecialProjects,
  getPageSettings,
  getProgrammingPageData,
  getProgrammingPageMetaData,
} from '../../../../../sanity/sanity.query';
import HeaderImage from '../../components/HeaderImage';
import HeaderImageTitleAndAlt from '../../components/HeaderImageTitleAndAlt';
import ProgrammingProjects from '../../components/Programming/ProgrammingProjects';
import SpecialProjects from '../../components/Programming/SpecialProjects';
import TextContent from '../../components/TextContent';

export const revalidate = 60;

export async function generateMetadata() {
  const { seoTitle, seoDescription, seoImage } =
    await getProgrammingPageMetaData();

  return {
    title: {
      default: seoTitle,
    },
    description: seoDescription,
    openGraph: {
      type: 'website',
      url: 'skyhighfarm.org/programming',
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
  const data = await getProgrammingPageData();
  const columns = data?.showFourColumns ? 4 : 3;
  const programmingProjects = await getFirstProgrammingProjects(columns);
  const programmingCount = await getNumberOfProgrammingProjects();
  const specialProjects = await getFirstSpecialProjects(columns);
  const specialProjectsCount = await getNumberOfSpecialProjects();

  const image = data?.headerImage;
  const imageAlt = data?.headerImage?.alt;
  const imageCredit = data?.headerImage?.credit;
  const title = data?.pageTitle;
  const titlePosition = data?.titlePosition;
  const textContent = data?.textContent;
  const specialProjectsTitle = data?.specialProjectsTitle;
  const specialProjectsTextContent = data?.specialProjectsTextContent;

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
        <ProgrammingProjects
          projects={programmingProjects}
          programmingCount={programmingCount}
          columns={columns}
        />
        <SpecialProjects
          projects={specialProjects}
          programmingCount={specialProjectsCount}
          title={specialProjectsTitle}
          textContent={specialProjectsTextContent}
          columns={columns}
        />
      </div>
    </div>
  );
}
