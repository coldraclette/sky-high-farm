import Image from 'next/image';
import ModalHeading from '@/app/(site)/components/ModalHeading';

import {
  urlForImage,
  urlForImageBlur,
} from '../../../../../../sanity/lib/image';
import {
  getAllSlugsByType,
  getSingleOrganizationData,
} from '../../../../../../sanity/sanity.query';

interface Props {
  params: {
    slug: string;
  };
}

export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
  const data = await getAllSlugsByType('organizations');

  return data
    .filter((org: any) => org.slug && org.slug.current)
    .map((org: any) => ({
      slug: org.slug.current,
    }));
}

export default async function Page({ params }: Props) {
  const data = await getSingleOrganizationData(params.slug);

  if (!data) {
    return null;
  }

  return (
    <div>
      <ModalHeading
        path="/food-access"
        title={data.name}
        info={data.orgInfo}
        content={data.text}
      />

      {data.showImage && data?.image && (
        <div className="relative m-auto mt-8 flex h-60 w-60 justify-center">
          <Image
            src={
              data?.image ? urlForImage(data?.image, 800) : '/skyhighfarm-logo.png'
            }
            alt={data?.alt ? data?.alt : ''}
            placeholder="blur"
            className="object-contain"
            height={1200}
            width={800}
            blurDataURL={
              data?.image
                ? data.image.asset.metadata.lqip
                : '/skyhighfarm-logo.png'
            }
          />
        </div>
      )}
    </div>
  );
}
