import React from 'react';
import { Card } from './../Card/Card';
import Body from './../Body/Body';

export const Homepage = () => {
  return (
    <div className='grid justify-items-stretch grid-cols-1 laptop:grid-cols-6 pb-10'>
      <div></div>
      <div>
        <Card />
      </div>
      <div className='laptop:col-span-3'>
        <Body />
      </div>
    </div>
  );
};
