
import React from 'react';
import '../../App.css';
import { HeroSection, HeroSlider, HeroWrapper, HeroImage, HeroContent, HeroSlide} from '../pages/HeroSection';
import Services from '../Services/index';
import Companies from '../InclineFlex/index';
import Carousel from '../Testimonial/Carousel';
import { companyData } from '../InclineFlex/data';
import { companyDataTwo } from '../InclineFlex/data';
import Contact from '../Contact/index';
import InfoSection from '../InfoSection/index2'
import { homeObjSeven, homeObjEight, homeObjNine } from '../InfoSection/Data';

export default function JoinUs() {
  return (
    <>
      <HeroSection>
      <HeroSlider>
                  <HeroWrapper>
          <HeroImage src={require('../../images/group-original.jpg').default}/>
          <HeroContent>
                  <h1 className='home'>Join Us</h1>
          </HeroContent>
      </HeroWrapper>
      </HeroSlider>
      </HeroSection>
      <InfoSection {...homeObjSeven}/>
      <InfoSection {...homeObjEight}/>
      <InfoSection {...homeObjNine}/>
      <Services />
      <Companies heading='As Seen In' data={companyData} />
      <Companies heading='Our Mentors Have Been At' data={companyDataTwo} />
      <Carousel />
      <Contact />
    </>
  );
}