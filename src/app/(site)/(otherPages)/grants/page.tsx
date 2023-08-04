import { getGrantsPageData } from '../../../../../sanity/sanity.query';
import StaffSection from '../../components/Team/StaffSection';
import TextContent from '../../components/TextContent';

export const revalidate = 60;

export default async function Page() {
  const data = await getGrantsPageData();

  return (
    <div className="px-5 md:px-6">
      <TextContent text={data.textContent} />
      {data.grantSections.map((staff: any) => {
        return <StaffSection key={staff._key} staff={staff} type={'grants'} />;
      })}
    </div>
  );
}
