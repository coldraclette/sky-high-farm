import Image from 'next/legacy/image';
import Link from 'next/link';

import { urlForImage, urlForImageBlur } from '../../../../../sanity/lib/image';

interface StaffMembersProps {
  member: any;
  type?: string;
}

export default function StaffMembers({ member, type }: StaffMembersProps) {
  const adjustMobilePosition = (member: any) => {
    if (!member.image) return;
    if (member.image.mobilePosition === 'top') {
      return 'object-top';
    } else if (member.image.mobilePosition === 'bottom') {
      return 'object-bottom';
    } else {
      return 'object-center';
    }
  };

  if (member.slug) {
    return (
      <Link href={`/${type}/${member.slug.current}`}>
        <div className="relative mt-2 aspect-square w-full md:mt-0">
          <Image
            src={
              member.image.asset
                ? urlForImage(member.image)
                : '/skyhighfarm-logo.png'
            }
            layout="fill"
            alt={member.alt ? member.alt : ''}
            placeholder="blur"
            objectFit="cover"
            blurDataURL={
              member.image.asset
                ? urlForImageBlur(member.image)
                : '/skyhighfarm-logo.png'
            }
            className={`transition-opacity duration-300 hover:opacity-70 ${adjustMobilePosition(
              member
            )}`}
          />
        </div>
        <p className="mt-4 text-xs md:mt-2 md:text-xl">{member.jobTitle}</p>
        <h3 className="text-size-1 mt-2 md:mt-4">{member.name}</h3>
      </Link>
    );
  }

  return (
    <div>
      <div className="relative mt-2 aspect-square w-full md:mt-0 ">
        <Image
          src={
            member.image.asset
              ? urlForImage(member.image)
              : '/skyhighfarm-logo.png'
          }
          layout="fill"
          alt={member.alt ? member.alt : ''}
          placeholder="blur"
          objectFit="cover"
          blurDataURL={
            member.image.asset
              ? urlForImageBlur(member.image)
              : '/skyhighfarm-logo.png'
          }
          className="transition-opacity duration-300 hover:opacity-70"
        />
      </div>
      <p className="mt-4 text-xs md:mt-2 md:text-xl">{member.jobTitle}</p>
      <h3 className="text-size-1 mt-2 md:mt-4">{member.name}</h3>
    </div>
  );
}
