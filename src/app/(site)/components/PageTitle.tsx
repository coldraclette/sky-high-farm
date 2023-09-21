interface PageTitleProps {
  pageTitle: string;
}

export default function PageTitle({ pageTitle }: PageTitleProps) {
  if (!pageTitle) return null;
  return (
    <h1 className="text-size-1 mb-4 font-bold text-green md:mb-8 md:leading-[39.6px] md:tracking-[0.36px]">
      {pageTitle}
    </h1>
  );
}
