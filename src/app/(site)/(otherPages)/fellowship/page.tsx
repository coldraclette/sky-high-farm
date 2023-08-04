import Link from 'next/link';
import Image from 'next/legacy/image';
import { getFellowshipPageData } from '../../../../../sanity/sanity.query';
import TextContent from '../../components/TextContent';
import { urlForImage, urlForImageBlur } from '../../../../../sanity/lib/image';
import StaffSection from '../../components/Team/StaffSection';

export default async function Page() {
  const data = await getFellowshipPageData();
  return (
    <div className="px-5 md:px-6">
      <TextContent text={data.textContent} />
      {data.fellowSections.map((staff: any) => {
        return <StaffSection key={staff._key} staff={staff} />;
      })}
    </div>
  );
}
