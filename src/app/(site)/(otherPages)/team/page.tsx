import { getTeamPageData } from '../../../../../sanity/sanity.query';
import StaffSection from '../../components/Team/StaffSection';

export const revalidate = 60;

export default async function Page() {
  const { staffSections } = await getTeamPageData();
  return (
    <div className="px-5 md:px-6">
      {staffSections.map((staff: any) => {
        return <StaffSection key={staff._key} staff={staff} type={"team"} />;
      })}
    </div>
  );
}
