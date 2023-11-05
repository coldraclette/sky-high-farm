import Image from 'next/image';

import { urlForImage, urlForImageBlur } from '../../../../../sanity/lib/image';

interface ModalSinglePortraitProps {
  image: any;
}

export default function ModalSinglePortrait({
  image,
}: ModalSinglePortraitProps) {
  return (
    <>
      <div className="relative mx-auto mt-8 flex h-[500px] max-w-[1200px] justify-center md:h-[800px]">
        <Image
          src={image ? urlForImage(image) : '/skyhighfarm-logo.png'}
          alt={image?.alt ? image.alt : ''}
          placeholder="blur"
          fill
          quality={80}
          className="object-cover md:object-contain"
          sizes="(min-width: 1280px) 1200px, calc(93.75vw + 19px)"
          blurDataURL={image ? image.metadata.lqip : '/skyhighfarm-logo.png'}
        />
      </div>
      <p className="my-1 text-center">{image.credit}</p>
    </>
  );
}
