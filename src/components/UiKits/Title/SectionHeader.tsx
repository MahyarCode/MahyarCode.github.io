import React, { ReactElement } from 'react';
import { SectionHeaderStructure } from 'types';

const SectionHeader: React.FC<SectionHeaderStructure> = ({
  title,
  iconLeft,
  iconRight,
}) => {
  const IconLeft: ReactElement | undefined = iconLeft ? iconLeft : undefined;
  const IconRight: ReactElement | undefined = iconRight ? iconRight : undefined;
  return (
    <>
      <h4 className='flex flex-row justify-center text-3xl font-medium text-primary text-white text-center gap-4 bg-slate-700 p-4 '>
        {IconLeft ? IconLeft : <></>}
        <span className=''>{title}</span>
        {IconRight ? IconRight : <></>}
      </h4>
    </>
  );
};

export default SectionHeader;
