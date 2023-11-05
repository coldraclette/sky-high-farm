import ModalSinglePortrait from '@/app/(site)/components/Images/ModalSinglePortrait';
import ModalHeading from '@/app/(site)/components/ModalHeading';

import { getSingleGrantsData } from '../../../../../../sanity/sanity.query';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 3600;

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

      {data?.image && (
        <ModalSinglePortrait image={data.image} />
      )}
    </div>
  );
}
