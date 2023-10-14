import { urlForImage } from '../../../../../sanity/lib/image';
import {
  getTeamPageData,
  getTeamPageMetaData,
} from '../../../../../sanity/sanity.query';
import PageTitle from '../../components/PageTitle';
import StaffSection from '../../components/Team/StaffSection';

export const revalidate = 60;

export async function generateMetadata() {
  const { seoTitle, seoDescription, seoImage } = await getTeamPageMetaData();

  return {
    title: {
      default: seoTitle,
    },
    description: seoDescription,
    openGraph: {
      type: 'website',
      url: 'skyhighfarm.org/team',
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
  const data = await getTeamPageData();
  const columns = data?.showFourColumns ? 4 : 3;

  return (
    <div className="px-5 md:px-6">
      {data.showPageTitle && <PageTitle pageTitle={data.pageTitle} />}
      {data.staffSections.map((staff: any) => {
        return (
          <StaffSection
            key={staff._key}
            staff={staff}
            type={'team'}
            columns={columns}
          />
        );
      })}
    </div>
  );
}
