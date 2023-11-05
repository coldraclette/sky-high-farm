import Image from 'next/image';
import Link from 'next/link';

import { urlForImage, urlForImageBlur } from '../../../../../sanity/lib/image';
import {
  getSupportPageData,
  getSupportPageMetaData,
} from '../../../../../sanity/sanity.query';
import BackgroundImage from '../../components/Images/BackgroundImage';
import Footer from '../../components/Navigation/Footer';
import Logo from '../../components/Navigation/Logo';
import Menu from '../../components/Navigation/Menu';
import PageTitle from '../../components/PageTitle';
import TextContent from '../../components/TextContent';

export const revalidate = 3600;

export async function generateMetadata() {
  const { seoTitle, seoDescription, seoImage } = await getSupportPageMetaData();

  return {
    title: {
      default: seoTitle,
    },
    description: seoDescription,
    openGraph: {
      type: 'website',
      url: 'skyhighfarm.org/support',
      title: seoTitle,
      description: seoDescription,
      siteName: 'skyhighfarm.org',
      images: [
        {
          url: seoImage ? urlForImage(seoImage) : '/skyhighfarm-logo.png',
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
  const data = await getSupportPageData();

  if (data.backgroundImage && data.backgroundImage.asset) {
    return (
      <>
        <header>
          <Menu color="text-white" />
          <Logo />
        </header>
        <div className="flex h-full flex-col justify-between">
          <div className="relative z-10 max-w-[1200px] px-5 md:px-6">
            {data.showPageTitle && (
              <PageTitle pageTitle={data.pageTitle} color="text-white" />
            )}
            <TextContent text={data.textContent} color="text-white" />
            <div className="-ml-2 flex md:-ml-5">
              <Link href={data.link} target="_blank" rel="noreferrer noopener">
                <div className="relative h-[50px] w-[140px] md:h-[100px] md:w-[250px]">
                  <Image
                    quality={80}
                    src={urlForImage(data.donateButtonImage)}
                    alt={data.donateButtonImage.alt}
                    width={250}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
          </div>
          <BackgroundImage backgroundImage={data.backgroundImage} />
          <Footer textColor="text-white" />
        </div>
      </>
    );
  }

  return (
    <>
      <header>
        <Menu />
        <Logo />
      </header>
      <div className="flex h-full flex-col justify-between">
        <div className="relative px-5 md:px-6">
          {data.showPageTitle && <PageTitle pageTitle={data.pageTitle} />}
          <TextContent text={data.textContent} />
          {data.link && data.donateButtonImage && (
            <div className="-ml-2 flex md:-ml-5">
              <Link href={data.link} target="_blank" rel="noreferrer noopener">
                <div className="relative h-[50px] w-[140px] md:h-[100px] md:w-[250px]">
                  <Image
                    quality={80}
                    src={urlForImage(data.donateButtonImage)}
                    alt={data.donateButtonImage.alt}
                    width={250}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
