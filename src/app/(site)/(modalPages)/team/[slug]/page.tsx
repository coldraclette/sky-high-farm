import Image from 'next/legacy/image';
import ModalSinglePortrait from '@/app/(site)/components/Images/ModalSinglePortrait';
import ModalHeading from '@/app/(site)/components/ModalHeading';

import {
  urlForImage,
  urlForImageBlur,
} from '../../../../../../sanity/lib/image';
import {
  getTeamMemberData,
  getTeamMemberMetaData,
} from '../../../../../../sanity/sanity.query';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 3600;

export async function generateMetadata({ params }: Props) {
  const { name, seoDescription, image } = await getTeamMemberMetaData(
    params.slug
  );

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
          url: image ? urlForImage(image) : '/skyhighfarm-logo.png',
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

      {data?.image && data?.image?.asset && (
        <ModalSinglePortrait image={data.image} />
      )}
    </div>
  );
}
