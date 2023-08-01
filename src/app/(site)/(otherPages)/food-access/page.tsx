import { getFoodAccessPageData } from '../../../../../sanity/sanity.query';
import TextContent from '../../components/TextContent';

export default async function Page() {
  const data = await getFoodAccessPageData();
  return (
    <div className="px-5 md:px-6">
      <TextContent text={data.textContent} />
      {/* GRID?? */}
    </div>
  );
}
