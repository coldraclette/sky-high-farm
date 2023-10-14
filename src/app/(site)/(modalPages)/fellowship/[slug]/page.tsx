import Image from 'next/legacy/image';
import ModalHeading from '@/app/(site)/components/ModalHeading';

import {
  urlForImage,
  urlForImageBlur,
} from '../../../../../../sanity/lib/image';
import { getSingleFellowshipData } from '../../../../../../sanity/sanity.query';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 60;

export default async function Page({ params }: Props) {
  const data = await getSingleFellowshipData(params.slug);
  return (
    <div>
      <ModalHeading
        path="/fellowship"
        title={data.name}
        info={data.orgInfo}
        content={data.text}
      />

      {data?.image && (
        <div className="relative m-auto mt-8 flex h-60 w-60 justify-center">
          <Image
            src={
              data?.image?.asset
                ? urlForImage(data?.image)
                : '/skyhighfarm-logo.png'
            }
            alt={data?.alt ? data.alt : ''}
            placeholder="blur"
            objectFit="contain"
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
