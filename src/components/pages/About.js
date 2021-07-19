import React from 'react';
import '../../App.css';
import Services from '../Services/index';
import Companies from '../InclineFlex/index';
import Carousel from '../Testimonial/Carousel';
import { companyData } from '../InclineFlex/data';
import { companyDataTwo } from '../InclineFlex/data';
import { companyDataThree } from '../InclineFlex/data';

export default function About() {
  return (
    <>
      <h1 className='about'>About</h1>
      <Services />
      <Companies heading='As Seen In' data={companyData} />
      <Companies heading='Our Mentors Have Been At' data={companyDataTwo} />
      <Companies heading='' data={companyDataThree} />
      <Carousel />
    </>
  );
}