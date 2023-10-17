import Image from 'next/legacy/image';

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
          src={image?.asset ? urlForImage(image) : '/skyhighfarm-logo.png'}
          layout="fill"
          alt={alt ? alt : ''}
          placeholder="blur"
          objectFit="cover"
          blurDataURL={
            image?.asset ? urlForImageBlur(image) : '/skyhighfarm-logo.png'
          }
          className={`transition-opacity duration-300 hover:opacity-70 ${adjustMobilePosition(
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