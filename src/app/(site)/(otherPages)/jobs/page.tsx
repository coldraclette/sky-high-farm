import { getJobPageData } from '../../../../../sanity/sanity.query';
import TextContent from '../../components/TextContent';

export const revalidate = 60;

export default async function Page() {
  const data = await getJobPageData();

  return (
    <div className="px-5 md:px-6">
      {data.jobOpenings &&
        data.jobOpenings.map((jobOpening: any) => (
          <div
            key={jobOpening._key}
            className="mb-8 grid gap-4 md:mb-16 md:grid-cols-[1fr_2fr]"
          >
            <div>
              <h2 className="text-size-1">{jobOpening.title}</h2>
              <h3 className="text-size-1 text-green">
                {jobOpening.additionalInfo}
              </h3>
            </div>
            <TextContent text={jobOpening.description} />
          </div>
        ))}
      <div>
        <p className={`text-size-1 mb-4 md:mb-8`}>
          {data.jobOpenings ? data.jobOpeningsText : data.noJobOpeningsText}
        </p>
        <TextContent text={data.singUpText} />
      </div>
    </div>
  );
}
