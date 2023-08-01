import Image from 'next/legacy/image';

import { urlForImage, urlForImageBlur } from '../../../../../sanity/lib/image';

interface TimelineItemProps {
  item: TimelineItem;
}
interface TimelineItem {
  _key: string;
  image: any;
  year: string;
  description: string;
}

export default function TimelineItem({ item }: TimelineItemProps) {
  if (!item) {
    return null;
  }
  return (
    <div className="grid-col mb-8 mt-4 grid md:mb-[50px] md:mt-8 md:grid-cols-2 ">
      <div className="text-size-1">
        <p className="text-left">{item.year}</p>
        <p className="mt-2 px-[15px] md:px-0 md:pr-20">{item.description}</p>
      </div>
      <div className="relative mt-2 w-full md:mt-0">
        <Image
          src={urlForImage(item.image)}
          alt={item.image.alt ? item.image.alt : ''}
          layout="responsive"
          width={1200}
          height={800}
          placeholder="blur"
          blurDataURL={urlForImageBlur(item.image)}
        />
      </div>
    </div>
  );
}
