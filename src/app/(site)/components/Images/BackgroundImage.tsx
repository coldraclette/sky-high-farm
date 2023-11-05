import Image from 'next/legacy/image';

import { urlForImage, urlForImageBlur } from '../../../../../sanity/lib/image';

interface BackgroundImageProps {
  backgroundImage: any;
}

export default function BackgroundImage({
  backgroundImage,
}: BackgroundImageProps) {
  return (
    <>
      <div className="fixed left-0 top-0 z-[5] h-screen w-full bg-black/10"></div>
      <div className="fixed left-0 top-0 h-screen w-full">
        <Image
          quality={80}
          alt={backgroundImage.alt}
          src={urlForImage(backgroundImage)}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={urlForImageBlur(backgroundImage)}
        />
      </div>
    </>
  );
}
