import React from 'react';
import '../../App.css';
import { HeroSection, HeroSlider, HeroWrapper, HeroImage, HeroContent, HeroSlide} from '../pages/HeroSection';
import Services from '../Services/index';
import Companies from '../InclineFlex/index';
import Carousel from '../Testimonial/Carousel';
import { companyData } from '../InclineFlex/data';
import { companyDataTwo } from '../InclineFlex/data';
import { companyDataThree } from '../InclineFlex/data';
import Contact from '../Contact/index';

export default function About() {
  return (
    <>
      <HeroSection>
      <HeroSlider>
                  <HeroWrapper>
          <HeroImage src={require('../../images/group-original.jpg').default}/>
          <HeroContent>
                  <h1 className='home'> About</h1>
          </HeroContent>
      </HeroWrapper>
      </HeroSlider>
      </HeroSection>
      <Services />
      <Companies heading='As Seen In' data={companyData} />
      <Companies heading='Our Mentors Have Been At' data={companyDataTwo} />
      <Carousel />
      <Contact />
    </>
  );
}