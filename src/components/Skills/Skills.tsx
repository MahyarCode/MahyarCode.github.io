import React from 'react';

import CircleCard from '@components/UiKits/Cards/CircleCard';

import { SKILLS } from '@data/skills';
import SectionHeader from '@components/UiKits/Title/SectionHeader';
import { GiPowerLightning } from 'react-icons/gi';
const Skills: React.FC = () => {
  return (
    <>
      <SectionHeader
        key={'skills-title'}
        title='Skills'
        iconLeft={<GiPowerLightning className='size-8 animate-pulse mt-1' />}
        iconRight={
          <GiPowerLightning className='size-8 animate-pulse mt-1 scale-x-[-1]' />
        }
      />
      <div className='px-4 md:px-0 mt-5'>
        <div className='flex flex-wrap gap-4 justify-center my-8'>
          {SKILLS.map((skills, i) => {
            return (
              <CircleCard key={i} src={skills.imageAddress} alt={skills.alt} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
