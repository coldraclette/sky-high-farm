import {
  getFirstProgrammingProjects,
  getFirstSpecialProjects,
  getNumberOfProgrammingProjects,
  getNumberOfSpecialProjects,
  getProgrammingPageData,
} from '../../../../../sanity/sanity.query';
import HeaderImage from '../../components/HeaderImage';
import HeaderImageTitleAndAlt from '../../components/HeaderImageTitleAndAlt';
import ProgrammingProjects from '../../components/Programming/ProgrammingProjects';
import SpecialProjects from '../../components/Programming/SpecialProjects';
import TextContent from '../../components/TextContent';

export const revalidate = 60;

export default async function Page() {
  const data = await getProgrammingPageData();
  const programmingProjects = await getFirstProgrammingProjects();
  const programmingCount = await getNumberOfProgrammingProjects();
  const specialProjects = await getFirstSpecialProjects();
  const specialProjectsCount = await getNumberOfSpecialProjects();

  const image = data?.headerImage;
  const imageAlt = data?.headerImage?.alt;
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
          imageAlt={imageAlt}
        />
        <TextContent text={textContent} />
        <ProgrammingProjects
          projects={programmingProjects}
          programmingCount={programmingCount}
        />
        <SpecialProjects
          projects={specialProjects}
          programmingCount={specialProjectsCount}
          title={specialProjectsTitle}
          textContent={specialProjectsTextContent}
        />
      </div>
    </div>
  );
}
