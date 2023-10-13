import Image from 'next/legacy/image';
import Link from 'next/link';

import { urlForImage, urlForImageBlur } from '../../../../../sanity/lib/image';
import {
  getFoodAccessPageData,
  getFoodAccessPageMetaData,
} from '../../../../../sanity/sanity.query';
import PageTitle from '../../components/PageTitle';
import TextContent from '../../components/TextContent';

export const revalidate = 60;

export async function generateMetadata() {
  const { seoTitle, seoDescription, seoImage } =
    await getFoodAccessPageMetaData();

  return {
    title: {
      default: seoTitle,
    },
    description: seoDescription,
    openGraph: {
      type: 'website',
      url: 'skyhighfarm.org/food-access',
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
  const data = await getFoodAccessPageData();
  return (
    <div className="px-5 md:px-6">
      {data.showPageTitle && <PageTitle pageTitle={data.pageTitle} />}
      <TextContent text={data.textContent} />
      <div className="mt-12 grid justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.organizations.map((org: any) => {
          return (
            <Link key={org._key} href={`/organizations/${org.slug.current}`}>
              <div className="relative mt-2 h-[230px] w-full md:mt-0 md:h-[520px]">
                <Image
                  src={
                    org?.image?.asset
                      ? urlForImage(org?.image)
                      : '/skyhighfarm-logo.png'
                  }
                  layout="fill"
                  alt={org?.alt ? org.alt : ''}
                  placeholder="blur"
                  objectFit="cover"
                  blurDataURL={
                    org?.image?.asset
                      ? urlForImageBlur(org?.image)
                      : '/skyhighfarm-logo.png'
                  }
                  className="transition-opacity duration-300 hover:opacity-70"
                />
              </div>

              <h3 className="text-size-1 mt-2 md:mt-4">{org.name}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
