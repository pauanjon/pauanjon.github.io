import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { HiDocumentDuplicate } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const Card = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <img
        src={require('./pauan.jpg')}
        alt={'Paulina Jonéus'}
        className={'shadow rounded-full flex items-center justify-center w-64'}
      />
      <div className='flex flex-row justify-center mt-2 text-5xl laptop:text-4xl'>
        <a href={'https://github.com/pauanjon'} className='hover:text-blue-400'>
          <AiFillGithub />
        </a>
        <a
          href={'https://www.linkedin.com/in/paulina-jon%C3%A9us-7a744967/'}
          className='hover:text-blue-400'
        >
          <AiFillLinkedin />
        </a>
        <a href={'mailto: paulina.joneus@gmail.com'} className='hover:text-blue-400'>
          <AiFillMail />
        </a>
        <Link to={'/cv'} className='hover:text-blue-400'>
          <HiDocumentDuplicate />
        </Link>
      </div>
    </div>
  );
};
