'use client';

import { useEffect, useState } from 'react';

import { getNextProgrammingProjects } from '../../../../../sanity/sanity.query';
import ProgrammingProjectItem from './ProgrammingProjectItem';

interface ProgrammingProjectsProps {
  projects: any;
  programmingCount: number;
}

export default function ProgrammingProjects({
  projects,
  programmingCount,
}: ProgrammingProjectsProps) {
  const [programmingProjects, setProgrammingProjects] = useState(projects);
  const loadMoreProjects = async () => {
    const startIndex = projects.length;
    const newProjects = await getNextProgrammingProjects(startIndex);
    setProgrammingProjects([...projects, ...newProjects]);
  };

  const renderLoadMoreButton = () => {
    if (programmingProjects.length < programmingCount)
      return (
        <button
          onClick={loadMoreProjects}
          className="text-left text-red md:text-[38px]"
        >
          Load More
        </button>
      );
  };

  return (
    <div className="mb-4 md:mb-8">
      <div className="mt-4 grid gap-6 md:mt-8 md:grid-cols-2 lg:grid-cols-3">
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
