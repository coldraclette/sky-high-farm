import { urlForImage } from '../../../../../sanity/lib/image';
import {
  getContactPageData,
  getContactPageMetaData,
} from '../../../../../sanity/sanity.query';
import BackgroundImage from '../../components/Images/BackgroundImage';
import Footer from '../../components/Navigation/Footer';
import Logo from '../../components/Navigation/Logo';
import Menu from '../../components/Navigation/Menu';
import PageTitle from '../../components/PageTitle';
import TextContent from '../../components/TextContent';

export const revalidate = 3600;

export async function generateMetadata() {
  const { seoTitle, seoDescription, seoImage } = await getContactPageMetaData();

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
  const data = await getContactPageData();

  if (data.backgroundImage) {
    return (
      <>
        <header>
          <Menu color="text-white" />
          <Logo />
        </header>
        <div className="flex h-full flex-col justify-between">
          <div className="relative z-10 px-5 md:px-6">
            {data.showPageTitle && (
              <PageTitle pageTitle={data.pageTitle} color="text-white" />
            )}
            <TextContent text={data.textContent} color="text-white" />
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
        </div>
        <Footer />
      </div>
    </>
  );
}
