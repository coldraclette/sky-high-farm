import Image from 'next/image';
import ModalHeading from '@/app/(site)/components/ModalHeading';
import NotFound from '@/app/(site)/not-found';
import { composeClassNames } from '@/app/(site)/utils';

import {
  urlForImage,
} from '../../../../../../sanity/lib/image';
import {
  getAllSlugsByType,
  getSingleEventBySlug,
  getSingleProjectBySlug,
  getSingleProjectMetaDataBySlug,
} from '../../../../../../sanity/sanity.query';

interface Props {
  params: {
    slug: string;
  };
}

export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
  // Fetch slugs for both programming projects and special projects
  const programmingProjects = await getAllSlugsByType('programmingProject');
  const specialProjects = await getAllSlugsByType('specialProject');

  // Combine and deduplicate the slugs
  const combinedSlugs = [...programmingProjects, ...specialProjects];
  const uniqueSlugs = Array.from(
    new Set(combinedSlugs.map((proj) => proj.slug.current))
  ).map((slug) => ({ slug }));

  return uniqueSlugs;
}

export async function generateMetadata({ params }: Props) {
  const data = await getSingleProjectMetaDataBySlug(params.slug);
  
  if (!data) {
    return null;
  }

  return {
    title: {
      default: `Sky High Farm | ${data.title ? data.title : ''}`,
    },
    description: data.seoDescription,
    openGraph: {
      type: 'website',
      url: `skyhighfarm.org/events/${params.slug}`,
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
  const data = await getSingleEventBySlug(params.slug);

  if (!data) {
    return <NotFound />;
  }

  return (
    <div>
      <ModalHeading
        path="/events"
        title={data.title}
        info={data.projectInfo}
        content={data.textContent}
      />
      {data.projectImage && (
        <>
          <div className="relative mx-auto mt-8 flex aspect-square w-full justify-center">
            <Image
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
            .filter((image: any) => image && image.asset)
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
                        src={urlForImage(image, 2000)}
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
                          src={urlForImage(image, 1920)}
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
