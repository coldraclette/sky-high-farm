'use client';

import { useState } from 'react';

import { getNextSpecialProjects } from '../../../../../sanity/sanity.query';
import { composeClassNames } from '../../utils';
import TextContent from '../TextContent';
import ProgrammingProjectItem from './ProgrammingProjectItem';

interface SpecialProjectsProps {
  projects: any;
  programmingCount: number;
  title: string;
  textContent: string;
  columns: number;
}

export default function SpecialProjects({
  projects,
  programmingCount,
  title,
  textContent,
  columns,
}: SpecialProjectsProps) {
  const [programmingProjects, setProgrammingProjects] = useState(projects);
  const loadMoreProjects = async () => {
    const startIndex = projects.length;
    const newProjects = await getNextSpecialProjects(startIndex, columns);
    setProgrammingProjects([...projects, ...newProjects]);
  };

  const renderLoadMoreButton = () => {
    if (programmingProjects.length < programmingCount)
      return (
        <button
          onClick={loadMoreProjects}
          className="mt-2 text-left text-red md:text-[38px]"
        >
          Load More
        </button>
      );
  };
  return (
    <div className="mb-4 md:mb-8">
      <h2 className="text-size-1-bold mb-4 md:mb-8">{title}</h2>
      <div className="mb-4 md:mb-8">
        <TextContent text={textContent} />
      </div>
      <div
        className={composeClassNames('mt-4 grid gap-6 md:mt-8 md:grid-cols-2', {
          'lg:grid-cols-3': columns === 3,
          'lg:grid-cols-3 xl:grid-cols-4': columns === 4,
        })}
      >
        {programmingProjects?.map((project: any, index: any) => {
          return (
            <ProgrammingProjectItem
              key={project.slug + index}
              project={project}
            />
          );
        })}
      </div>
      {renderLoadMoreButton()}
    </div>
  );
}
