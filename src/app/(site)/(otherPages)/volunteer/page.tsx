import { getVolunteerPageData } from '../../../../../sanity/sanity.query';
import TextContent from '../../components/TextContent';

export const revalidate = 60;

export default async function Page() {
  const data = await getVolunteerPageData();

  return (
    <div className="px-5 md:px-6">
      <TextContent text={data.textContent} />
    </div>
  );
}
