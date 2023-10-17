interface PageTitleProps {
  pageTitle: string;
  color?: string;
}

export default function PageTitle({
  pageTitle,
  color = 'text-green',
}: PageTitleProps) {
  if (!pageTitle) return null;
  return (
    <h1
      className={`text-size-1 mb-4 font-bold ${color} md:mb-8 md:leading-[39.6px] md:tracking-[0.36px]`}
    >
      {pageTitle}
    </h1>
  );
}
