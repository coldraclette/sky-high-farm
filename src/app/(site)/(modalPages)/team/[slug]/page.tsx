import Image from 'next/legacy/image';
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

export const revalidate = 60;

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

  return (
    <div>
      <ModalHeading
        path="/team"
        title={data.name}
        info={data.jobTitle}
        content={data.bio}
      />

      {data?.image && (
        <div className="relative mt-8 flex justify-center">
          <Image
            src={
              data?.image?.asset
                ? urlForImage(data?.image)
                : '/skyhighfarm-logo.png'
            }
            alt={data?.alt ? data.alt : ''}
            placeholder="blur"
            objectFit="cover"
            height={1200}
            width={800}
            blurDataURL={
              data?.image?.asset
                ? urlForImageBlur(data?.image)
                : '/skyhighfarm-logo.png'
            }
          />
        </div>
      )}
    </div>
  );
}
