import React from 'react';
import '../../App.css';
import Services from '../Services/index';
import Contact from '../Contact/index';
import Companies from '../InclineFlex/index';
import { companyDataTwo } from '../InclineFlex/data';
import { companyDataThree } from '../InclineFlex/data';
import Timeline from '../Timeline/Timeline';

export default function Accelerator() {
  return (
    <>
      <h1 className='accelerator'>Accelerator Program</h1>
          <Timeline />
            <Companies heading='Our Mentors Have Been At' data={companyDataTwo} />
      <Companies heading='' data={companyDataThree} />
      <Services />
      <Contact />
      
    </>
  );
}