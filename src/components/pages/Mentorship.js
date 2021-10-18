import React from 'react';
import '../../App.css';
import Services from '../Services/index';
import Contact from '../Contact/index';
import Companies from '../InclineFlex/index';
import { companyDataTwo } from '../InclineFlex/data';
import { HeroSection, HeroSlider, HeroWrapper, HeroImage, HeroContent, HeroSlide} from '../pages/HeroSection';
import Accordion from '../FAQ/FAQ';

export default function Mentorship() {
  return (
    <>
            <HeroSection>
      <HeroSlider>
                  <HeroWrapper>
          <HeroImage src={require('../../images/group-original.jpg').default}/>
          <HeroContent>
                  <h1 className='home'>Mentorship</h1>
          </HeroContent>
      </HeroWrapper>
      </HeroSlider>
      </HeroSection>
      <Accordion />
      <Companies heading='Our Mentors Have Been At' data={companyDataTwo} />
      <Services />
      <Contact />
    </>
  );
}