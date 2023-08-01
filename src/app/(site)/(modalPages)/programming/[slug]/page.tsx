import Image from 'next/legacy/image';

import {
  urlForImage,
  urlForImageBlur,
} from '../../../../../../sanity/lib/image';
import {
  getProgrammingProject,
  getSpecialProject,
} from '../../../../../../sanity/sanity.query';
import BackButton from '../../../components/BackButton';
import TextContent from '../../../components/TextContent';

interface Props {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: Props) {
  let data;

  console.log(params.slug);
  try {
    data = await getProgrammingProject(params.slug);
  } catch (error) {
    console.error('Failed to fetch programming project:', error);
  }

  if (!data) {
    try {
      data = await getSpecialProject(params.slug);
    } catch (error) {
      console.error('Failed to fetch special project:', error);
    }
  }

  return (
    <div>
      <div className="px-5 pt-4 md:px-6">
        <BackButton path="/programming" />
        <h1 className="text-size-1-bold mt-4 md:mb-10 md:mt-5">{data.title}</h1>
        <div className="mt-3 grid gap-4 md:mt-10 md:grid-cols-[1fr_2fr]">
          <TextContent
            text={data.projectInfo}
            textSize="text-[15px] md:text-2xl md:leading-[28.7px] md:tracking-[0.24px]"
          />
          <TextContent
            text={data.textContent}
            textSize="text-[15px] md:text-[24px] md:leading-[28.7px] md:tracking-[0.24px]"
          />
        </div>
      </div>
      {data.projectImage && (
        <div className="relative mt-8 flex h-[250px] w-full justify-center md:h-[780px]">
          <Image
            src={urlForImage(data.projectImage)}
            alt={data.projectImage.alt ? data.projectImage.alt : ''}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={urlForImageBlur(data.projectImage)}
          />
        </div>
      )}
      <div>
        {data.images &&
          data.images.map((image: any) => {
            return (
              <div
                key={image._key}
                className="relative mt-4 flex h-[250px] w-full justify-center md:mt-8 md:h-[780px]"
              >
                {image.imageStyle === 'portrait' && (
                  <Image
                    src={urlForImage(image)}
                    alt={image.alt ? image.alt : ''}
                    layout="fill"
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL={urlForImageBlur(image)}
                  />
                )}
                {image.imageStyle === 'fullWidth' && (
                  <Image
                    src={urlForImage(image)}
                    alt={image.alt ? image.alt : ''}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={urlForImageBlur(image)}
                  />
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
