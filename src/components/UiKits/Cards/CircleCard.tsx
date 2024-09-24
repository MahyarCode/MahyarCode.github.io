import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { CircleCardProps } from 'types';

const CircleCard: React.FC<CircleCardProps> = ({ src, alt, isHidden }) => {
  return (
    <div
      className={`${isHidden ? 'hidden' : ''} square__card flex-col w-40 gap-2 `}
    >
      <LazyLoadImage
        src={src}
        className='rounded-md'
        effect='opacity'
        width={60}
        height={60}
        alt={alt}
      />
      {alt ? (
        <p className='text-center font-bold mt-2 self-end w-full'>{alt}</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CircleCard;
