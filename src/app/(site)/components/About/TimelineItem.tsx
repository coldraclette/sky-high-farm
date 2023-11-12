import Image from 'next/image';

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
          src={item?.image ? urlForImage(item.image) : '/skyhighfarm-logo.png'}
          alt={item?.image?.alt ? item.image.alt : ''}
          fill
          className="object-cover"
          sizes="(min-width: 780px) calc(33.33vw - 16px), calc(100vw - 40px)"
          placeholder="blur"
          blurDataURL={
            item?.image ? item?.image?.metadata?.lqip : '/skyhighfarm-logo.png'
          }
        />
      </div>
    </div>
  );
}
