import Image from 'next/legacy/image';

import {
  urlForImage,
  urlForImageBlur,
} from '../../../../../../sanity/lib/image';
import { getSingleGrantsData } from '../../../../../../sanity/sanity.query';
import BackButton from '../../../components/BackButton';
import TextContent from '../../../components/TextContent';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 60;

export default async function Page({ params }: Props) {
  const data = await getSingleGrantsData(params.slug);
  return (
    <div>
      <div className="px-5 pt-4 md:px-6">
        <BackButton path="/food-access" />
        <h1 className="text-size-1-bold mt-4 md:mb-10 md:mt-5">{data.name}</h1>
        <div className="mt-3 grid md:mt-10 lg:grid-cols-[1fr_2fr]">
          <TextContent text={data.orgInfo} textSize="text-[15px] md:text-2xl" />
          <TextContent
            text={data.text}
            textSize="md:text-[24px] md:leading-[28.8px] md:tracking-[0.24px]"
          />
        </div>
      </div>

      <div className="relative m-auto mt-8 flex h-60 w-60 justify-center">
        <Image
          src={
            data?.image?.asset
              ? urlForImage(data.image)
              : '/skyhighfarm-logo.png'
          }
          alt={data?.alt ? data?.alt : ''}
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
    </div>
  );
}
