import Image from 'next/image';

import { urlForImage, urlForImageBlur } from '../../../../../sanity/lib/image';

interface TeamPortraitProps {
  image: any;
  alt?: string;
  name?: string;
  jobTitle?: string;
}

export default function TeamPortrait({
  image,
  alt,
  name,
  jobTitle,
}: TeamPortraitProps) {
  const adjustMobilePosition = (image: any) => {
    if (!image) return;
    if (image.mobilePosition === 'top') {
      return 'object-top';
    } else if (image.mobilePosition === 'bottom') {
      return 'object-bottom';
    } else {
      return 'object-center';
    }
  };

  return (
    <>
      <div className="relative mt-2 aspect-square w-full md:mt-0">
        <Image
          quality={80}
          src={image ? urlForImage(image) : '/skyhighfarm-logo.png'}
          fill
          alt={alt ? alt : ''}
          placeholder="blur"
          sizes="(min-width: 1280px) calc(25vw - 30px), (min-width: 1040px) calc(33.18vw - 30px), (min-width: 780px) calc(50vw - 36px), calc(100vw - 40px)"
          blurDataURL={image ? image.metadata.lqip : '/skyhighfarm-logo.png'}
          className={`object-cover transition-opacity duration-300 hover:opacity-70 ${adjustMobilePosition(
            image
          )}`}
        />
      </div>
      {jobTitle && (
        <p className="mt-2 text-sm md:text-lg 2xl:text-2xl">{jobTitle}</p>
      )}
      {name && <h3 className="text-lg md:text-2xl lg:text-3xl">{name}</h3>}
    </>
  );
}
