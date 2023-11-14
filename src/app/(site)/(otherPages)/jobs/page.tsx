import Image from 'next/image';

import { urlForImage, urlForImageBlur } from '../../../../../sanity/lib/image';
import {
  getJobPageData,
  getJobPageMetaData,
} from '../../../../../sanity/sanity.query';
import Footer from '../../components/Navigation/Footer';
import Logo from '../../components/Navigation/Logo';
import Menu from '../../components/Navigation/Menu';
import PageTitle from '../../components/PageTitle';
import TextContent from '../../components/TextContent';

export const revalidate = 86400; // 24 hours

export async function generateMetadata() {
  const { seoTitle, seoDescription, seoImage } = await getJobPageMetaData();

  return {
    title: {
      default: seoTitle,
    },
    description: seoDescription,
    openGraph: {
      type: 'website',
      url: 'skyhighfarm.org/job',
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
  const data = await getJobPageData();

  if (data.backgroundImage && data.backgroundImage.asset) {
    return (
      <>
        <header>
          <Menu />
          <Logo />
        </header>
        <div className="flex h-full flex-col justify-between">
          <div className="relative z-10 px-5 md:px-6">
            {data.showPageTitle && (
              <PageTitle pageTitle={data.pageTitle} color="text-white" />
            )}
            {data.jobOpenings &&
              data.jobOpenings.map((jobOpening: any) => (
                <div
                  key={jobOpening._key}
                  className="mb-8 grid gap-4 md:mb-16 lg:grid-cols-[1fr_2fr]"
                >
                  <div>
                    <h2 className="text-size-1 text-white">
                      {jobOpening.title}
                    </h2>
                    <h3 className="text-size-1 text-white">
                      {jobOpening.additionalInfo}
                    </h3>
                  </div>
                  <TextContent
                    text={jobOpening.description}
                    color="text-white"
                  />
                </div>
              ))}
            <div>
              <p className={`text-size-1 mb-4 text-white md:mb-8`}>
                {data.jobOpenings
                  ? data.jobOpeningsText
                  : data.noJobOpeningsText}
              </p>
              <TextContent text={data.singUpText} color="text-white" />
            </div>
          </div>
          <div className="fixed left-0 top-0 h-screen w-full">
            <Image
              alt={data.backgroundImage.alt}
              src={urlForImage(data.backgroundImage)}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={data.backgroundImage.asset.metadata.lqip}
            />
          </div>
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
        <div className="px-5 md:px-6">
          {data.showPageTitle && <PageTitle pageTitle={data.pageTitle} />}
          {data.jobOpenings &&
            data.jobOpenings.map((jobOpening: any) => (
              <div
                key={jobOpening._key}
                className="mb-8 grid gap-4 md:mb-16 lg:grid-cols-[1fr_2fr]"
              >
                <div>
                  <h2 className="text-size-1 font-bold md:font-normal">
                    {jobOpening.title}
                  </h2>
                  <h3 className="text-size-1 text-green">
                    {jobOpening.additionalInfo}
                  </h3>
                </div>
                <TextContent text={jobOpening.description} />
              </div>
            ))}
          <div>
            <p className={`text-size-1 mb-4 md:mb-8`}>
              {data.jobOpenings ? data.jobOpeningsText : data.noJobOpeningsText}
            </p>
            <TextContent text={data.singUpText} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
