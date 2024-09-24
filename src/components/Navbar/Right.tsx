import React from 'react';
import { BsGithub, BsEnvelope, BsLinkedin } from 'react-icons/bs';

const Right: React.FC = () => {
  return (
    <div className='flex items-center space-x-3'>
      <div className='flex items-center space-x-3'>
        <a
          href='https://github.com/MahyarCode'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsGithub
            title='GitHub'
            className='link text-xl cursor-pointer size-8'
          />
        </a>
        <a
          href='https://www.linkedin.com/in/mahyar-mousavinia/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsLinkedin
            title='LinkedIn'
            className='link text-xl cursor-pointer size-8'
          />
        </a>
        <a href='mailto:mahyar.mousavinia@ut.ac.ir'>
          <BsEnvelope
            title='Email'
            className='link text-xl cursor-pointer size-8'
          />
        </a>
      </div>
    </div>
  );
};

export default Right;
