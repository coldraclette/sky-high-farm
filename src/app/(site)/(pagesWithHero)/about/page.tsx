import { PortableText, PortableTextComponents } from '@portabletext/react';

import { getAboutPageData } from '../../../../../sanity/sanity.query';
import Timeline from '../../components/About/Timeline';
import HeaderImage from '../../components/HeaderImage';
import HeaderImageTitleAndAlt from '../../components/HeaderImageTitleAndAlt';
import TextContent from '../../components/TextContent';

export default async function Page() {
  const data = await getAboutPageData();

  const image = data?.headerImage;
  const imageAlt = data?.headerImage?.alt;
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
          imageAlt={imageAlt}
        />
        <TextContent text={textContent} />
        <Timeline timeline={timeline} />
        <TextContent text={bottomText} textSize="text-xs md:text-[20px]" />
      </div>
    </div>
  );
}
