import Image from 'next/legacy/image';
import Link from 'next/link';

import { urlForImage, urlForImageBlur } from '../../../../../sanity/lib/image';
import { getFoodAccessPageData } from '../../../../../sanity/sanity.query';
import TextContent from '../../components/TextContent';

export default async function Page() {
  const data = await getFoodAccessPageData();
  return (
    <div className="px-5 md:px-6">
      <TextContent text={data.textContent} />
      <div className="grid justify-center mt-12 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.organizations.map((org: any) => {
          return (
            <Link key={org._key} href={`/organizations/${org.slug.current}`}>
              <div className="relative mt-2 h-[230px] w-full md:mt-0 md:h-[520px]">
                <Image
                  src={
                    org.image ? urlForImage(org.image) : '/skyhighfarm-logo.png'
                  }
                  layout="fill"
                  alt={org.alt ? org.alt : ''}
                  placeholder="blur"
                  objectFit="cover"
                  blurDataURL={
                    org.image
                      ? urlForImageBlur(org.image)
                      : '/skyhighfarm-logo.png'
                  }
                  className="transition-opacity duration-300 hover:opacity-70"
                />
              </div>

              <h3 className="text-size-1 mt-2 md:mt-4">{org.name}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
