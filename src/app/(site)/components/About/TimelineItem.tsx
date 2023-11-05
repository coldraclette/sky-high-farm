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
    <div className="grid-col mb-8 mt-4 grid md:mb-[50px] md:mt-8 md:grid-cols-3 ">
      <div className="text-size-1 md:col-span-2">
        <p className="text-left">{item.year}</p>
        <p className="mt-2 px-[15px] md:px-0 md:pr-20">{item.description}</p>
      </div>
      <div className="relative mt-2 aspect-square w-full md:mt-0">
        <Image
          quality={80}
          src={
            item?.image?.asset
              ? urlForImage(item.image)
              : '/skyhighfarm-logo.png'
          }
          alt={item?.image?.alt ? item.image.alt : ''}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={
            item?.image?.asset
              ? urlForImageBlur(item?.image)
              : '/skyhighfarm-logo.png'
          }
        />
      </div>
    </div>
  );
}
