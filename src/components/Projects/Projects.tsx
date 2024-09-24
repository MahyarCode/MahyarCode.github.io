import React from 'react';

import { GiStarProminences } from 'react-icons/gi';

import SectionHeader from '@components/UiKits/Title/SectionHeader';
import ProjectItem from '@components/UiKits/Cards/ProjectItem';

import { PROJECTS } from '@data/projects';

const Projects: React.FC = () => {
  return (
    <>
      <SectionHeader
        key={'projects-list-title'}
        title='Projects'
        iconLeft={<GiStarProminences className='size-8 animate-pulse mt-1' />}
        iconRight={
          <GiStarProminences className='size-8 animate-pulse mt-1 scale-x-[-1]' />
        }
      />
      <div
        className='grid grid-cols-1 md:grid-cols-2 w-full gap-4 bg-gray-100 bg-clip-padding backdrop-filter
  backdrop-blur-sm bg-opacity-40 md:px-20  my-10  rounded-lg'
      >
        {PROJECTS.map((project, i) => {
          return (
            <ProjectItem
              key={`${project.title}-${i}`}
              title={project.title}
              paragraph={project.paragraph}
              content={project.content}
              contentDuty={project.contentDuty}
              screenShot={project.screenShot}
              logo={project.logo}
              projectUrl={project.projectUrl}
              selectedSkills={project.selectedSkills}
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
