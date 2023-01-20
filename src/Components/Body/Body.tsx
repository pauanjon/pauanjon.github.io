import React from 'react';
import { pubdat, Link, unpubdat } from './Link';

const Body = () => {
  return (
    <div className='flex flex-col pt-8 pl-20 pr-20 laptop:pl-0 laptop:pl-4'>
      <h1 className='flex justify-center laptop:justify-start text-2xl laptop:text-5xl tablet:text-3xl font-bold font-serif'>
        Paulina Jonéus
      </h1>
      <h1 className='text-l mt-5 '>
        I am a PhD-candidate at the department of Statistics, Uppsala University. My main research
        interests are in statistics and causal inference, focusing on statistical methods in medical
        research.
      </h1>
      <h1 className='text-2xl tablet:text-3xl mt-5 mb-1'>Peer-reviewed publications</h1>
      <ul className='list-disc ml-5'>
        {pubdat.map((e, idx) => (
          <Link
            author={e.author}
            journal={e.journal}
            year={e.year}
            title={e.title}
            link={e.link}
            key={idx}
          />
        ))}
      </ul>
      <h1 className='text-2xl tablet:text-3xl mt-5 mb-1'>Publications (not peer-reviewed)</h1>
      <ul className='list-disc ml-5'>
        {unpubdat.map((e, idx) => (
          <Link author={e.author} year={e.year} title={e.title} link={e.link} key={idx} />
        ))}
      </ul>
      <h1 className='text-2xl tablet:text-3xl mt-5 mb-1'>Manuscripts in preparation</h1>
      <ul className='list-disc ml-5'>
        <li>
          Johansson P., Jonéus P., and Langenskiöld S. (2021), "Causal Inferences and Real-World
          Evidence: A comparative effectiveness evaluation of abiraterone acetate against
          enzalutamide"
        </li>
        <li>
          Jonéus P., Johansson P., and Langenskiöld S. (2021), "Docetaxel versus New Hormonal
          treatment -- a registry based comparative effectiveness evaluation for mCRPC-patients"
        </li>
      </ul>
    </div>
  );
};

export default Body;
