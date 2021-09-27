import React from 'react';
import '../../App.css';
import InfoSection from '../InfoSection/index';
import {homeObjOne, homeObjTwo} from  '../InfoSection/Data';
import Services from '../Services/index';
import Footer from '../Footer/index';
import { HeroSection, HeroSlider, HeroWrapper, HeroImage, HeroContent, HeroSlide} from '../pages/HeroSection';
import Contact from '../Contact/index';

export default function Home() {
  return (
    <div>
      <HeroSection>
      <HeroSlider>
                  <HeroWrapper>
          <HeroImage src={require('../../images/group-original.jpg').default}/>
          <HeroContent>
                  <h1 className='home'> INCLINE EDUCATION</h1>
          </HeroContent>
      </HeroWrapper>
      </HeroSlider>
      </HeroSection>

      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo}/>
      <Services />
      <Contact />
        </div>
    
  );
}