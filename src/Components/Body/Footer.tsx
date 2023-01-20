import React from 'react';

const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full flex justify-center items-center h-8 bg-white text-gray-400 text-sm'>
      Made by{' '}
      <a className='hover:text-blue-400 ml-1' href={'https://github.com/lukketotte'}>
        @lukketotte
      </a>
    </div>
  );
};

export default Footer;
