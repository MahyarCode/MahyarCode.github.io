import React, { useRef, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { ProjectItemStructure } from 'types';

const ProjectItem: React.FC<ProjectItemStructure> = (props) => {
  const {
    screenShot,
    logo,
    title,
    projectUrl,
    paragraph,
    content,
    contentDuty,
    selectedSkills,
  } = props;

  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');

  const contentSpace = useRef(null);

  const toggleAccordion = () => {
    setActive((prevState) => !prevState);
    setHeight(
      active
        ? '0px'
        : //@ts-ignore
          `${contentSpace.current ? contentSpace.current.scrollHeight : 0 + 100}px`,
    );
  };

  return (
    <>
      <div className={active ? 'shadow-2xl shadow-blue-400' : 'shadow-lg'}>
        <div className='relative'>
          {projectUrl ? (
            <a
              className={`${active ? 'animate-pulse' : ''} absolute  bottom-3 right-3 shadow-lg shadow-gray-600 rounded-full `}
              href={projectUrl}
              target='_blank'
            >
              <img
                className='w-14 h-14 rounded-full object-contain bg-white'
                src={logo}
              />
            </a>
          ) : (
            <img
              className='absolute bottom-3 right-3 w-14 h-14 rounded-full shadow-lg shadow-gray-600 bg-white'
              src={logo}
            />
          )}
          <img
            className='w-full max-h-72 rounded-t-md self-center object-contain'
            src={screenShot}
          />
        </div>

        <div
          className={`${
            active ? 'bg-blue-100' : ''
          } py-2 px-4 flex items-center cursor-pointer hover:bg-blue-100 group`}
          onClick={toggleAccordion}
        >
          <div className='ml-4 flex-grow'>
            <h2 className='flex flex-row flex-wrap gap-2 '>
              {title}
              {projectUrl ? (
                <a
                  className='hover:text-blue-600 hover:font-bold transition-all duration-200'
                  href={projectUrl}
                  target='_blank'
                >
                  <FaEye className='size-6' />
                </a>
              ) : (
                <a>
                  <FaEyeSlash className='size-6' />
                </a>
              )}
            </h2>

            <p className=' font-light text-gray-600'>{paragraph}</p>
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={`${
              active
                ? 'rotate-180 duration-200 bg-white'
                : 'rotate-0 duration-200'
            } h-8 w-8 p-2 rounded-full group-hover:bg-white`}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </div>
        <div
          ref={contentSpace}
          style={{ maxHeight: `${height}` }}
          className='overflow-auto duration-300 ease-in-out px-4 '
        >
          <div className='flex flex-col gap-2 mb-4 mt-4'>
            <h3 className='font-bold'>Project Description:</h3>
            <p className='py-2 text-justify'>{content}</p>
            <h3 className='font-bold'>
              I served as a {contentDuty} within the team.
            </h3>

            <div className='flex flex-row flex-wrap justify-between'>
              <h3 className='font-bold'>Used Technologies:</h3>
              {projectUrl ? (
                <a
                  className='font-bold text-blue-600 hover:text-blue-900 flex flex-row'
                  href={projectUrl}
                  target='_blank'
                >
                  Visit Website
                </a>
              ) : (
                <a className='font-bold text-blue-600 hover:text-blue-900 flex flex-row'>
                  Unfortunately there is no accessible link
                </a>
              )}
            </div>
            <div className='flex  flex-row flex-wrap gap-2 justify-between px-2 '>
              {selectedSkills.map((skill, i) => {
                return (
                  <img
                    key={`${i}-${skill.imageAddress}-${title}`}
                    className='size-10 rounded-md object-cover'
                    src={skill.imageAddress}
                    alt={skill.alt}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectItem;
