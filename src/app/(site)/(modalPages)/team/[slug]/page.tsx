import ModalSinglePortrait from '@/app/(site)/components/Images/ModalSinglePortrait';
import ModalHeading from '@/app/(site)/components/ModalHeading';

import { urlForImage } from '../../../../../../sanity/lib/image';
import {
  getAllSlugsByType,
  getTeamMemberData,
  getTeamMemberMetaData,
} from '../../../../../../sanity/sanity.query';

interface Props {
  params: {
    slug: string;
  };
}

export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
  const data = await getAllSlugsByType('teamMember');

  return data
    .filter((member: any) => member.slug && member.slug.current)
    .map((member: any) => ({
      slug: member.slug.current,
    }));
}

export async function generateMetadata({ params }: Props) {
  const { name, seoDescription, image } = await getTeamMemberMetaData(
    params.slug
  );

  if (!name || !seoDescription) {
    return null;
  }


  return {
    title: {
      default: `Sky High Farm | ${name}`,
    },
    description: seoDescription,
    openGraph: {
      type: 'website',
      url: `skyhighfarm.org/team/${params.slug}`,
      title: name,
      description: seoDescription,
      siteName: 'skyhighfarm.org',
      images: [
        {
          url: image & image.asset ? urlForImage(image) : '/skyhighfarm-logo.png',
          width: 1200,
          height: 630,
          alt: name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function Page({ params }: Props) {
  const data = await getTeamMemberData(params.slug);

  if (!data) {
    return null;
  }

  return (
    <div>
      <ModalHeading
        path="/team"
        title={data.name}
        info={data.jobTitle}
        content={data.bio}
      />

      {data?.image && <ModalSinglePortrait image={data.image} />}
    </div>
  );
}
