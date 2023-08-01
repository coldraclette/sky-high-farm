import Image from 'next/legacy/image';
import Link from 'next/link';

import { urlForImage, urlForImageBlur } from '../../../../../sanity/lib/image';

interface StaffMembersProps {
  member: any;
}

export default function StaffMembers({ member }: StaffMembersProps) {
  return (
    <div>
      <Link href={`/team/${member.slug.current}`}>
        <div className="relative mt-2 h-[230px] w-full md:mt-0 md:h-[520px]">
          {/* FIX IMAGES ON DESKTOP */}
          <Image
            src={
              member.image ? urlForImage(member.image) : '/skyhighfarm-logo.png'
            }
            layout="fill"
            alt={member.alt ? member.alt : ''}
            placeholder="blur"
            objectFit="cover"
            blurDataURL={
              member.image
                ? urlForImageBlur(member.image)
                : '/skyhighfarm-logo.png'
            }
            className="transition-opacity duration-300 hover:opacity-70"
          />
        </div>
        <p className="mt-4 text-xs md:mt-2 md:text-xl">{member.jobTitle}</p>
        <h3 className="text-size-1 mt-2 md:mt-4">{member.name}</h3>
      </Link>
    </div>
  );
}
