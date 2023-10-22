import Image from 'next/legacy/image';

import { urlForImage, urlForImageBlur } from '../../../../../sanity/lib/image';

interface ModalSinglePortraitProps {
  image: any;
}

export default function ModalSinglePortrait({
  image,
}: ModalSinglePortraitProps) {
  return (
    <>
      <div className="relative mt-8 flex justify-center">
        <Image
          src={image?.asset ? urlForImage(image) : '/skyhighfarm-logo.png'}
          alt={image?.alt ? image.alt : ''}
          placeholder="blur"
          objectFit="cover"
          height={1200}
          width={800}
          blurDataURL={
            image?.asset ? urlForImageBlur(image) : '/skyhighfarm-logo.png'
          }
        />
      </div>
      <p className="my-1 text-center">{image.credit}</p>
    </>
  );
}
