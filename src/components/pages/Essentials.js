import React from 'react';
import '../../App.css';
import Blog from '../Blog/Blog';
import { HeroSection, HeroSlider, HeroWrapper, HeroImage, HeroContent, HeroSlide} from '../pages/HeroSection';

export default function Essentials() {
  return (
    <>
    <HeroSection>
      <HeroSlider>
                  <HeroWrapper>
          <HeroImage src={require('../../images/group-original.jpg').default}/>
          <HeroContent>
                  <h1 className='home'>Essentials</h1>
          </HeroContent>
      </HeroWrapper>
      </HeroSlider>
      </HeroSection>

      <Blog />
    </>
  );
}