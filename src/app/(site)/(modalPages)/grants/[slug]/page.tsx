import ModalSinglePortrait from '@/app/(site)/components/Images/ModalSinglePortrait';
import ModalHeading from '@/app/(site)/components/ModalHeading';

import {
  getAllSlugsByType,
  getSingleGrantsData,
} from '../../../../../../sanity/sanity.query';

interface Props {
  params: {
    slug: string;
  };
}

export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
  const data = await getAllSlugsByType('grant');

  return data
    .filter((grant: any) => grant.slug && grant.slug.current)
    .map((grant: any) => ({
      slug: grant.slug.current,
    }));
}

export default async function Page({ params }: Props) {
  const data = await getSingleGrantsData(params.slug);

  if (!data) {
    return null;
  }

  return (
    <div>
      <ModalHeading
        path="/grants"
        title={data.name}
        info={data.jobTitle}
        content={data.bio}
      />

      {data?.image && <ModalSinglePortrait image={data.image} />}
    </div>
  );
}
