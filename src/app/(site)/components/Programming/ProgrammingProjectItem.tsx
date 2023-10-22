import Image from 'next/legacy/image';
import Link from 'next/link';

import { urlForImage, urlForImageBlur } from '../../../../../sanity/lib/image';
import { composeClassNames } from '../../utils';

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
    <Link
      href={`/programming/${project.slug.current}`}
      className="overflow-hidden"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={
            project.projectImage
              ? urlForImage(project.projectImage)
              : '/skyhighfarm-logo.png'
          }
          alt={project.projectImage?.alt ? project.projectImage?.alt : ''}
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          className="h-full w-full transition-opacity duration-300 hover:opacity-40"
          blurDataURL={
            project.projectImage
              ? urlForImageBlur(project.projectImage)
              : '/skyhighfarm-logo.png'
          }
        />
      </div>
      <div className="mt-2">
        {project.flexibleDate ? (
          <p className="text-sm md:text-xl">{project.flexibleDate}</p>
        ) : (
          <p className="text-sm md:text-xl">{formatDateShort(project.date)}</p>
        )}
      </div>
      <h3 className="md:text-xl lg:text-3xl">{project.title}</h3>
      {project.subtitleGreen && (
        <h4 className={composeClassNames('md:text-xl lg:text-3xl')}>
          {project.subtitleGreen}
        </h4>
      )}
    </Link>
  );
}
