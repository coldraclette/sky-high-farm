import Image from 'next/legacy/image';
import ModalHeading from '@/app/(site)/components/ModalHeading';

import {
  urlForImage,
  urlForImageBlur,
} from '../../../../../../sanity/lib/image';
import { getSingleOrganizationData } from '../../../../../../sanity/sanity.query';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 3600;

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
              data?.image?.asset
                ? urlForImage(data?.image)
                : '/skyhighfarm-logo.png'
            }
            alt={data?.alt ? data?.alt : ''}
            placeholder="blur"
            objectFit="contain"
            height={1200}
            width={800}
            quality={80}
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
