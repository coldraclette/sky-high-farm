'use client';

import { useState } from 'react';

import { getNextProgrammingProjects } from '../../../../../sanity/sanity.query';
import { composeClassNames } from '../../utils';
import ProgrammingProjectItem from './ProgrammingProjectItem';

interface ProgrammingProjectsProps {
  projects: any;
  programmingCount: number;
  columns: number;
}

export default function ProgrammingProjects({
  projects,
  programmingCount,
  columns,
}: ProgrammingProjectsProps) {
  const [programmingProjects, setProgrammingProjects] = useState(projects);
  const [showMore, setShowMore] = useState(false);

  const loadMoreProjects = async () => {
    if (programmingProjects.length < programmingCount) {
      const startIndex = programmingProjects.length;
      const newProjects = await getNextProgrammingProjects(startIndex, columns);
      setProgrammingProjects([...programmingProjects, ...newProjects]);
    }
    setShowMore(true);
  };

  const showLess = () => {
    setProgrammingProjects(projects);
    setShowMore(false);
  };

  const renderLoadMoreButton = () => {
    if (programmingProjects.length === programmingCount && !showMore) {
      return null;
    }

    if (programmingProjects.length < programmingCount) {
      if (showMore) {
        return (
          <div className="flex gap-8">
            <button
              onClick={loadMoreProjects}
              className="ml-2 mt-2 text-left text-red md:text-[38px]"
            >
              Load More
            </button>
            <button
              onClick={showLess}
              className="mt-2 text-left text-red md:text-[38px]"
            >
              Show Less
            </button>
          </div>
        );
      } else {
        return (
          <button
            onClick={loadMoreProjects}
            className="mt-2 text-left text-red md:text-[38px]"
          >
            Load More
          </button>
        );
      }
    } else {
      return (
        <button
          onClick={showLess}
          className="mt-2 text-left text-red md:text-[38px]"
        >
          Show Less
        </button>
      );
    }
  };

  return (
    <div className="mb-4 md:mb-8">
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
