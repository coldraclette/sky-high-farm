import Image from 'next/legacy/image';

import {
  urlForImage,
  urlForImageBlur,
} from '../../../../../../sanity/lib/image';
import { getTeamMemberData } from '../../../../../../sanity/sanity.query';
import BackButton from '../../../components/BackButton';
import TextContent from '../../../components/TextContent';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 60;

export default async function Page({ params }: Props) {
  const data = await getTeamMemberData(params.slug);

  return (
    <div>
      <div className="px-5 pt-4 md:px-6">
        <BackButton path="/team" />
        <h1 className="text-size-1-bold mt-4 md:mb-10 md:mt-5">{data.name}</h1>
        <div className="mt-3 grid md:mt-10 md:grid-cols-[1fr_2fr]">
          <h2 className="text-[15px] md:text-2xl">{data.jobTitle}</h2>
          <TextContent
            text={data.bio}
            textSize="md:text-[24px] md:leading-[28.8px] md:tracking-[0.24px]"
          />
        </div>
      </div>

      <div className="relative mt-8 flex justify-center">
        <Image
          src={data.image ? urlForImage(data.image) : '/skyhighfarm-logo.png'}
          alt={data.alt ? data.alt : ''}
          placeholder="blur"
          objectFit="cover"
          height={1200}
          width={800}
          blurDataURL={
            data.image ? urlForImageBlur(data.image) : '/skyhighfarm-logo.png'
          }
        />
      </div>
    </div>
  );
}
