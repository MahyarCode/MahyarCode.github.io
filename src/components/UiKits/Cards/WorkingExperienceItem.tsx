import React from 'react';
import { WorkingExperienceItemStructure } from 'types';

const WorkingExperienceItem: React.FC<WorkingExperienceItemStructure> = ({
  companyName,
  companyLogoAddress,
  workingDates,
  location,
  position,
  experiences,
}) => {
  return (
    <div className='w-full flex flex-col gap-1 justify-center shadow-xl shadow-gray-100 p-2 pb-5 hover:shadow-gray-500 transition-all duration-500'>
      <div className='flex flex-col md:flex-row gap-4 md:gap-16 justify-center items-center '>
        <span className='order-2 md:order-1 text-xl font-bold w-40 text-center md:text-right'>
          {companyName}
        </span>
        <img
          className='order-1 md:order-2 w-20 h-20   object-contain'
          src={companyLogoAddress}
          alt={companyName}
        />
        <span className='order-3 text-xl font-bold text-center md:text-left'>
          {workingDates}
        </span>
      </div>
      <p className='w-full text-center font-bold'>
        {position} - {location}
      </p>
      <ul className='list-disc list-inside px-2 md:px-16 *:font-bold *:text-gray-700 *:my-2 *:text-justify *:text-lg'>
        {experiences.map((exp, i) => {
          return <li key={`${exp}-${i}`}>{exp}</li>;
        })}
      </ul>
    </div>
  );
};

export default WorkingExperienceItem;
