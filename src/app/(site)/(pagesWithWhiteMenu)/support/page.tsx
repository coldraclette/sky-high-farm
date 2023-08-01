import Image from 'next/legacy/image';

import { urlForImage, urlForImageBlur } from '../../../../../sanity/lib/image';
import { getSupportPageData } from '../../../../../sanity/sanity.query';
import TextContent from '../../components/TextContent';

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
        <div className="relative z-10 mt-40 max-w-[1200px] px-5 md:px-6">
          <TextContent text={textContent} color="text-white" />
          <a href={link} target="_blank" rel="noreferrer noopener">
            <div className="relative h-[50px] w-[140px] md:h-[100px] md:w-[250px]">
              <Image
                src="/donate1.png"
                alt="donate button"
                width={250}
                height={100}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
