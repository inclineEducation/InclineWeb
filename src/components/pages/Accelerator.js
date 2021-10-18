import React from 'react';
import '../../App.css';
import Services from '../Services/index';
import Contact from '../Contact/index';
import Companies from '../InclineFlex/index';
import { companyDataTwo } from '../InclineFlex/data';
import { companyDataThree } from '../InclineFlex/data';
import Timeline from '../Timeline/Timeline';
import Provide from '../Provide/index';
import InfoSection from '../InfoSection/index';
import InfoSectionTwo from '../InfoSection/index2';
import { homeObjFive, homeObjSix} from '../InfoSection/Data';
import { HeroSection, HeroSlider, HeroWrapper, HeroImage, HeroContent, HeroSlide} from '../pages/HeroSection';


export default function Accelerator() {
  return (
    <>
      <HeroSection>
      <HeroSlider>
                  <HeroWrapper>
          <HeroImage src={require('../../images/group-original.jpg').default}/>
          <HeroContent>
                  <h1 className='home'>Accelerator</h1>
          </HeroContent>
      </HeroWrapper>
      </HeroSlider>
      </HeroSection>
      <InfoSectionTwo {...homeObjFive} />
          <Provide />
          <InfoSectionTwo {...homeObjSix} />
          <Timeline />
            <Companies heading='Our Mentors Have Been At' data={companyDataTwo} />
      <Services />
      <Contact />
      
    </>
  );
}