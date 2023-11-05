import Image from 'next/image';
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
    <Link
      href={`/programming/${project.slug.current}`}
      className="overflow-hidden"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          quality={80}
          src={
            project.projectImage
              ? urlForImage(project.projectImage)
              : '/skyhighfarm-logo.png'
          }
          alt={project.projectImage?.alt ? project.projectImage?.alt : ''}
          placeholder="blur"
          fill
          sizes="(min-width: 1280px) calc(25vw - 30px), (min-width: 1040px) calc(33.18vw - 30px), (min-width: 780px) calc(50vw - 36px), calc(100vw - 40px)"
          className="h-full w-full object-cover transition-opacity duration-300 hover:opacity-40"
          blurDataURL={
            project.projectImage
              ? project.projectImage?.metadata?.lqip
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
        <h4 className="text-green md:text-xl lg:text-3xl">
          {project.subtitleGreen}
        </h4>
      )}
    </Link>
  );
}
