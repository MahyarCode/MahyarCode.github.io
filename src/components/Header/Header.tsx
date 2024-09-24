import React from 'react';
// TODO: image haro inja add kon az file asset /src/asset/images
import headerBg from '@images/header-bg.webp';
import imgMRM from '@images/Mahyar.jpg';

import { FaUniversity, FaMapMarked } from 'react-icons/fa';
const Header: React.FC = () => {
  return (
    <>
      <div className='profile-page'>
        <section className='relative block' style={{ height: '500px' }}>
          <div
            className='absolute top-0 w-full h-full bg-center bg-cover'
            style={{
              backgroundImage: `url(${headerBg})`,
            }}
          >
            <span
              id='blackOverlay'
              className='w-full h-full absolute opacity-50 bg-black'
            ></span>
          </div>
          <div
            className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
            style={{ height: '70px' }}
          >
            <svg
              className='absolute bottom-0 overflow-hidden'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              version='1.1'
              viewBox='0 0 2560 100'
              x='0'
              y='0'
            >
              <polygon
                className='text-gray-300 fill-current'
                points='2560 0 2560 100 0 100'
              ></polygon>
            </svg>
          </div>
        </section>
        <section className='relative py-16 bg-gray-300'>
          <div className='container mx-auto px-4'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64'>
              <div className='px-6'>
                <div className='flex flex-wrap justify-center'>
                  <div className='w-full lg:w-3/12 px-4 lg:order-2 flex justify-center'>
                    <div className='relative'>
                      <img
                        alt='Seyed Mohammad Mahyar Mousavinia'
                        src={imgMRM}
                        className='shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-24 h-[180px] w-[180px] object-cover'
                        style={{ maxWidth: '180px' }}
                      />
                    </div>
                  </div>
                </div>
                <div className='text-center mt-28'>
                  <h3 className='text-4xl font-semibold leading-normal mb-2 text-gray-800'>
                    Seyed Mohammad Mahyar Mousavinia
                  </h3>
                  <div className='text-lg leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase'>
                    Industial Management Student
                  </div>
                  <div className='flex flex-row flex-wrap w-full justify-center gap-4 mt-5'>
                    <div className='mb-2 text-gray-700 flex  gap-2 '>
                      <FaMapMarked className='size-5' />
                      Tehran, Iran
                    </div>
                    <div className='mb-2 text-gray-700 flex justify-center gap-2'>
                      <FaUniversity className='size-5' />
                      Bachelor's degree in Industrial Management at University of Tehran
                    </div>
                  </div>
                </div>
                <div className='mt-5 py-10 border-t border-gray-300 text-center'>
                  <div className='flex flex-wrap justify-center'>
                    <div className='w-full lg:w-9/12 px-4'>
                      <p className='mb-4 text-lg leading-relaxed text-gray-800 text-justify'>
                        Experienced and results-driven full-stack and blockchain
                        developer with a strong background in the Business
                        Administration, and blockchain industries. With over{' '}
                        <b>5 years</b> of hands-on experience, I have a proven
                        track record of designing and delivering robust software
                        solutions that meet the unique challenges of these
                        dynamic sectors.
                      </p>
                      <p className='mb-4 text-lg leading-relaxed text-gray-800 text-justify'>
                        My expertise lies in leveraging C#, Python, and{' '}
                        <b>JavaScript </b> (specially <b>TypeScript</b>)
                        extensive libraries and frameworks to develop scalable
                        and efficient applications. Staying at the forefront of
                        emerging technologies is a priority for me. I am
                        committed to continuously improving development
                        practices and driving exceptional performance. My
                        passion for the Business Administration and blockchain
                        domains fuels my dedication to delivering impactful
                        solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
