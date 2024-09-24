import React from 'react';

import Left from './Left';
import Right from './Right';
const Navbar: React.FC = () => {
  return (
    <div className='relative'>
      <div className=' container mx-auto fixed z-40 top-0 left-0 right-0 py-3 md:py-4 lg:py-5 darkOrLight border-b border-gray-200 dark:border-darkSecondary bg-white/90 dark:bg-darkPrimary w-full backdrop-blur dark:backdrop-blur flex items-center justify-between px-20'>
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default Navbar;
