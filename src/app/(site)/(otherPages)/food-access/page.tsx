import Image from 'next/legacy/image';
import Link from 'next/link';

import { urlForImage, urlForImageBlur } from '../../../../../sanity/lib/image';
import {
  getFoodAccessPageData,
  getFoodAccessPageMetaData,
  getPageSettings,
} from '../../../../../sanity/sanity.query';
import Footer from '../../components/Navigation/Footer';
import Logo from '../../components/Navigation/Logo';
import Menu from '../../components/Navigation/Menu';
import PageTitle from '../../components/PageTitle';
import TextContent from '../../components/TextContent';
import { composeClassNames } from '../../utils';

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
  const columns = data?.showFourColumns ? 4 : 3;

  if (!data) {
    return null;
  }

  return (
    <>
      <header>
        <Menu />
        <Logo />
      </header>
      <div className="px-5 md:px-6">
        {data.showPageTitle && <PageTitle pageTitle={data.pageTitle} />}
        <TextContent text={data.textContent} />
        <div
          className={composeClassNames(
            'my-4 grid gap-6 md:my-8 md:grid-cols-2',
            {
              'lg:grid-cols-3': columns === 3,
              'lg:grid-cols-3 xl:grid-cols-4': columns === 4,
            }
          )}
        >
          {data.organizations.map((org: any) => {
            return (
              <Link key={org._key} href={`/organizations/${org.slug.current}`}>
                <div className="relative mt-2 aspect-square w-full md:mt-0">
                  <Image
                    src={
                      org?.image?.asset
                        ? urlForImage(org?.image)
                        : '/skyhighfarm-logo.png'
                    }
                    layout="fill"
                    alt={org?.alt ? org.alt : ''}
                    placeholder="blur"
                    objectFit="contain"
                    blurDataURL={
                      org?.image?.asset
                        ? urlForImageBlur(org?.image)
                        : '/skyhighfarm-logo.png'
                    }
                    className="transition-opacity duration-300 hover:opacity-70"
                  />
                </div>

                <h3 className="mt-2 text-lg md:text-2xl lg:text-3xl">
                  {org.name}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
