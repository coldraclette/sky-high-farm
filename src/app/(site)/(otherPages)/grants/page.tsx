import { urlForImage } from '../../../../../sanity/lib/image';
import {
  getGrantsPageData,
  getGrantsPageMetaData,
} from '../../../../../sanity/sanity.query';
import Footer from '../../components/Navigation/Footer';
import Logo from '../../components/Navigation/Logo';
import Menu from '../../components/Navigation/Menu';
import PageTitle from '../../components/PageTitle';
import StaffSection from '../../components/Team/StaffSection';
import TextContent from '../../components/TextContent';

export const revalidate = 60;

export async function generateMetadata() {
  const { seoTitle, seoDescription, seoImage } = await getGrantsPageMetaData();

  if (!seoTitle || !seoDescription || !seoImage) {
    return null;
  }

  return {
    title: {
      default: seoTitle,
    },
    description: seoDescription,
    openGraph: {
      type: 'website',
      url: 'skyhighfarm.org/grants',
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
  const data = await getGrantsPageData();
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
        <TextContent text={data.textContent} greenTitles={true} />
        <div className="mt-8">
          {data.grantSections.map((staff: any) => {
            return (
              <StaffSection
                key={staff._key}
                staff={staff}
                type={'grants'}
                columns={columns}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
