import Image from 'next/image';
import ModalHeading from '@/app/(site)/components/ModalHeading';
import NotFound from '@/app/(site)/not-found';
import { composeClassNames } from '@/app/(site)/utils';

import {
  urlForImage,
  urlForImageBlur,
} from '../../../../../../sanity/lib/image';
import {
  getProgrammingProject,
  getSingleProgrammingProjectMetaData,
  getSingleSpecialProjectMetaData,
  getSpecialProject,
} from '../../../../../../sanity/sanity.query';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 3600;

export async function generateMetadata({ params }: Props) {
  let data;

  try {
    data = await getSingleProgrammingProjectMetaData(params.slug);
  } catch (error) {
    console.log('Failed to fetch programming project:', error);
  }

  if (!data) {
    try {
      data = await getSingleSpecialProjectMetaData(params.slug);
    } catch (error) {
      console.log('Failed to fetch special project:', error);
    }
  }

  return {
    title: {
      default: `Sky High Farm | ${data.title ? data.title : ''}`,
    },
    description: data.seoDescription,
    openGraph: {
      type: 'website',
      url: `skyhighfarm.org/programming/${params.slug}`,
      title: data.title,
      description: data.seoDescription,
      siteName: 'skyhighfarm.org',
      images: [
        {
          url: data.projectImage
            ? urlForImage(data.projectImage)
            : '/skyhighfarm-logo.png',
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function Page({ params }: Props) {
  let data;

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

  if (!data) {
    return <NotFound />;
  }
  return (
    <div>
      <ModalHeading
        path="/programming"
        title={data.title}
        info={data.projectInfo}
        content={data.textContent}
      />
      {data.projectImage && (
        <>
          <div className="relative mx-auto mt-8 flex aspect-square w-full justify-center">
            <Image
              quality={80}
              src={urlForImage(data.projectImage)}
              alt={data.projectImage.alt ? data.projectImage.alt : ''}
              fill
              sizes="(min-width: 1620px) 1536px, calc(95.08vw + 15px)"
              placeholder="blur"
              blurDataURL={data.projectImage.metadata.lqip}
              className="object-cover"
            />
          </div>
          {data.projectImage.credit && (
            <p className="pr-2 text-right text-xs md:mt-1 md:pr-4 md:text-sm">
              {data.projectImage.credit}
            </p>
          )}
        </>
      )}
      <div>
        {data.images &&
          data.images
            .filter((image: any) => !image._upload)
            .map((image: any) => {
              if (!image) return null;
              return (
                <>
                  <div
                    key={image._key}
                    className="relative mt-4 flex  aspect-square w-full justify-center md:mt-8"
                  >
                    {image.imageStyle === 'portrait' && (
                      <Image
                        quality={80}
                        src={urlForImage(image)}
                        alt={image.alt ? image.alt : ''}
                        fill
                        sizes="(min-width: 1620px) 1536px, calc(95.08vw + 15px)"
                        className="1 object-contain"
                        placeholder="blur"
                        blurDataURL={image.asset.metadata.lqip}
                      />
                    )}
                    {(image.imageStyle === 'fullWidth' ||
                      !image.imageStyle) && (
                      <>
                        <Image
                          quality={80}
                          src={urlForImage(image)}
                          alt={image.alt ? image.alt : ''}
                          fill
                          sizes="(min-width: 1620px) 1536px, calc(95.08vw + 15px)"
                          className="2 object-cover"
                          placeholder="blur"
                          blurDataURL={image.asset.metadata.lqip}
                        />
                      </>
                    )}
                  </div>
                  {image.credit && (
                    <p
                      className={composeClassNames(
                        'pr-2 text-xs md:mt-1 md:pr-4 md:text-sm',
                        {
                          'text-center': image.imageStyle === 'portrait',
                          'text-right': image.imageStyle === 'fullWidth',
                        }
                      )}
                    >
                      {image.credit}
                    </p>
                  )}
                </>
              );
            })}
      </div>
    </div>
  );
}
