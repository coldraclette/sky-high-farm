import Image from 'next/image';

import { urlForImage, urlForImageBlur } from '../../../../sanity/lib/image';

interface HeaderImageProps {
  image: any;
  alt?: string;
  titlePosition: string;
  title: string;
}

export default function HeaderImage({
  image,
  alt,
  titlePosition,
  title,
}: HeaderImageProps) {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <Image
        src={urlForImage(image)}
        alt={alt ? alt : ''}
        priority
        fill
        sizes="(min-width: 1620px) 1536px, calc(95.08vw + 15px)"
        className="object-cover"
        placeholder="blur"
        blurDataURL={image.metadata.lqip}
      />
      {titlePosition === 'middle' && (
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-4xl font-bold text-white">
          {title}
        </h1>
      )}
      {titlePosition === 'bottomLeft' && (
        <h1 className="absolute bottom-0 left-0 m-4 text-4xl font-bold text-white">
          {title}
        </h1>
      )}
    </div>
  );
}
