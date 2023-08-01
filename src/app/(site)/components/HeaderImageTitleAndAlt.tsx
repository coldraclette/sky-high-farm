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
        <h1 className="text-size-1-bold my-5 text-green">{title}</h1>
      )}
      <div className="ml-auto">
        <p className="text-caption">{imageAlt}</p>
      </div>
    </div>
  );
}
