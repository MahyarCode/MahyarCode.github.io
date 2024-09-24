const Footer = () => {
  return (
    <div className='px-4 lg:px-0 bg-gray-100'>
      <div className='max-w-5xl mx-auto flex flex-col md:flex-row space-y-1 md:space-y-0 items-start md:items-center md:justify-between pt-3 pb-5 md:py-10'>
        <p className='text-secondary text-sm'>Copyright ©2024 M.R.M.N</p>
        <p className='text-secondary text-sm'>
          Created By{' '}
          <a
            target='_blank'
            className='font-medium hover:text-blue-600'
            href='https://github.com/QP-MRMousavi'
            rel='noreferrer'
          >
            Seyed Mohammad Reza Mousavi Nia
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
