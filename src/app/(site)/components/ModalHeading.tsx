import BackButton from './BackButton';
import TextContent from './TextContent';

interface ModalHeadingProps {
  path: string;
  title: string;
  info: string;
  content: string;
}

export default function ModalHeading({
  path,
  title,
  info,
  content,
}: ModalHeadingProps) {
  const renderSubtitle = () => {
    if (path === '/food-access' || path === '/programming' || path === '/events') {
      return (
        <TextContent
          text={info}
          textSize="text-[15px] md:text-2xl md:leading-[28.7px] md:tracking-[0.24px]"
        />
      );
    }

    return <h2 className="text-[15px] md:text-2xl">{info}</h2>;
  };

  return (
    <div className="px-5 pt-4 md:px-6">
      <BackButton path={path} />
      {title && (
        <h1 className="text-size-1-bold fixed z-10 mt-4 md:mt-5">{title}</h1>
      )}
      <div className="mt-12 grid gap-4 md:mt-[100px] lg:grid-cols-[1fr_2fr]">
        {renderSubtitle()}
        <TextContent
          text={content}
          textSize="text-[15px] md:text-[24px] md:leading-[28.7px] md:tracking-[0.24px]"
        />
      </div>
    </div>
  );
}
