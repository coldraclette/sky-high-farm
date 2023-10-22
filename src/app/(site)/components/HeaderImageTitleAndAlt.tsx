import { composeClassNames } from '../utils';

interface HeaderImageTitleAndAltProps {
  title: string;
  titlePosition: string;
  imageAlt: string;
}

export default function HeaderImageTitleAndAlt({
  title,
  titlePosition,
  imageAlt,
}: HeaderImageTitleAndAltProps) {
  return (
    <div className="mt-3 flex flex-col-reverse items-start justify-between md:mt-6 md:flex-row ">
      {titlePosition === 'under' && (
        <h1
          className={composeClassNames(
            'my-5 font-bold md:text-2xl lg:text-4xl'
          )}
        >
          {title}
        </h1>
      )}
      <div className="ml-auto">
        <p className="text-caption">{imageAlt}</p>
      </div>
    </div>
  );
}
