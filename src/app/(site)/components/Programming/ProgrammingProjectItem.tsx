import Image from 'next/legacy/image';
import Link from 'next/link';

import { urlForImage, urlForImageBlur } from '../../../../../sanity/lib/image';

interface ProgrammingProjectItemProps {
  project: {
    slug: {
      current: string;
    };
    projectImage: any;
    date: string;
    flexibleDate: string;
    title: string;
    subtitleGreen: string;
  };
}

export default function ProgrammingProjectItem({
  project,
}: ProgrammingProjectItemProps) {
  function formatDateShort(input: string): string {
    const date = new Date(input);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  return (
    <Link href={`/programming/${project.slug.current}`}>
      <div className="relative h-[230px] md:h-[400px] lg:h-[500px]">
        <Image
          src={
            project.projectImage
              ? urlForImage(project.projectImage)
              : '/skyhighfarm-logo.png'
          }
          alt={project.projectImage?.alt ? project.projectImage?.alt : ''}
          layout="fill"
          placeholder="blur"
          objectFit="cover"
          className="transition-opacity duration-300 hover:opacity-40"
          blurDataURL={
            project.projectImage
              ? urlForImageBlur(project.projectImage)
              : '/skyhighfarm-logo.png'
          }
        />
      </div>
      {project.flexibleDate ? (
        <p className="text-xs md:text-xl">{project.flexibleDate}</p>
      ) : (
        <p className="text-xs md:text-xl">{formatDateShort(project.date)}</p>
      )}
      <h3 className="text-size-1">{project.title}</h3>
      {project.subtitleGreen && (
        <h4 className="text-size-1 text-green">{project.subtitleGreen}</h4>
      )}
    </Link>
  );
}
