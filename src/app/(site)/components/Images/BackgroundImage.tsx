import Image from 'next/image';

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
          fill
          sizes="(min-width: 1620px) 1536px, calc(95.08vw + 15px)"
          className="bg-center object-cover"
          placeholder="blur"
          blurDataURL={backgroundImage.asset.metadata.lqip}
        />
      </div>
    </>
  );
}
