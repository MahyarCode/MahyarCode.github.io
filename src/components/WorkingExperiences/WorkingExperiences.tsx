import React from 'react';

import { EXPERIENCES } from '@data/experiences';

import { GiMountainRoad } from 'react-icons/gi';

import SectionHeader from '@components/UiKits/Title/SectionHeader';
import WorkingExperienceItem from '@components/UiKits/Cards/WorkingExperienceItem';

const WorkingExperiences: React.FC = () => {
  return (
    <>
      <SectionHeader
        key={'working-experiences-title'}
        title='Working Experiences'
        iconLeft={<GiMountainRoad className='size-8 animate-pulse mt-1' />}
        iconRight={
          <GiMountainRoad className='size-8 animate-pulse mt-1 scale-x-[-1]' />
        }
      />
      <div
        className='flex flex-col w-full gap-10 bg-gray-100 bg-clip-padding backdrop-filter
  backdrop-blur-sm bg-opacity-40 px-10 md:px-24 mt-4  mb-14  rounded-lg'
      >
        {EXPERIENCES.map((experience) => {
          return (
            <WorkingExperienceItem
              key={experience.companyName}
              companyName={experience.companyName}
              companyLogoAddress={experience.companyLogoAddress}
              workingDates={experience.workingDates}
              location={experience.location}
              position={experience.position}
              experiences={experience.experiences}
            />
          );
        })}
      </div>
    </>
  );
};

export default WorkingExperiences;
