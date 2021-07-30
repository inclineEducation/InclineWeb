import React from 'react';
import '../../App.css';
import { companyDataFour } from '../InclineFlex/data';
import Companies from '../InclineFlex/index';
import Contact from '../Contact/index';
import Services from '../Services/index';
import Testimonial from '../Testimonial/Carousel';
import { HeroSection, HeroSlider, HeroWrapper, HeroImage, HeroContent, HeroSlide} from '../pages/HeroSection';
import InfoPanel from '../Panel/InfoPanel';


export default function Panels() {
  return (
    <>
            <HeroSection>
      <HeroSlider>
                  <HeroWrapper>
          <HeroImage src={require('../../images/group-original.jpg').default}/>
          <HeroContent>
                  <h1 className='home'> Panels </h1>
          </HeroContent>
      </HeroWrapper>
      </HeroSlider>
      </HeroSection>
      <InfoPanel />
      <Companies heading='Previous Partners' data={companyDataFour} />
      <Services />
      <Testimonial />
      <Contact />

    </>
  );
}