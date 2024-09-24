import React from 'react';

const Left: React.FC = () => {
  return (
    <div>
      <div className='flex items-center group'>
        <div
          onClick={() => (window.location.href = '/')}
          className='relative flex items-center select-none'
        >
          <div className='relative hidden md:block'>
            <h3 className='font-sora tracking-wide -ml-1 font-semibold text-lg group-hover:cursor-pointer text-primary  text-black group-hover:opacity-80'>
              S.M. Mahyar Mousavinia
            </h3>
            {/* <p className='absolute -top-4 -right-2 text-2xl group-hover:text-[#82ceee]'>
              .
            </p> */}
          </div>
          {/* <span className='text-[0.65rem] md:mx-3 px-2 py-0.5 rounded-2xl bg-blue-500 text-white'>
            DA
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Left;
