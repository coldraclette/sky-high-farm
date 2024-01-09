import ModalSinglePortrait from '@/app/(site)/components/Images/ModalSinglePortrait';
import ModalHeading from '@/app/(site)/components/ModalHeading';

import {
  getAllSlugsByType,
  getSingleFellowshipData,
} from '../../../../../../sanity/sanity.query';

interface Props {
  params: {
    slug: string;
  };
}

export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
  const data = await getAllSlugsByType('fellow');

  return data
    .filter((fellow: any) => fellow.slug && fellow.slug.current)
    .map((fellow: any) => ({
      slug: fellow.slug.current,
    }));
}

export default async function Page({ params }: Props) {
  const data = await getSingleFellowshipData(params.slug);

  if (!data) {
    return null;
  }

  return (
    <div>
      <ModalHeading
        path="/fellowship"
        title={data.name}
        info={data.jobTitle}
        content={data.bio}
      />

      {data?.image && <ModalSinglePortrait image={data.image} />}
    </div>
  );
}
