import Image from 'next/legacy/image';
import ModalHeading from '@/app/(site)/components/ModalHeading';

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

export const revalidate = 60;

export async function generateMetadata({ params }: Props) {
  let data;

  try {
    data = await getSingleProgrammingProjectMetaData(params.slug);
  } catch (error) {}

  if (!data) {
    try {
      data = await getSingleSpecialProjectMetaData(params.slug);
    } catch (error) {}
  }

  return {
    title: {
      default: `Sky High Farm | ${data.title}`,
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

  return (
    <div>
      <ModalHeading
        path="/programming"
        title={data.title}
        info={data.projectInfo}
        content={data.textContent}
      />
      {data.projectImage && (
        <div className="relative mt-8 flex aspect-square w-full justify-center">
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
                className="relative mt-4 flex  aspect-square w-full justify-center md:mt-8"
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
