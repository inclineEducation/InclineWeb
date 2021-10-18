import React from 'react';
import '../../App.css';
import Signin from '../../components/Signin/index';
import { HeroSection, HeroSlider, HeroWrapper, HeroImage, HeroContent, HeroSlide} from '../pages/HeroSection';
import ContactForm from '../Signin/index';

export default function ContactUs() {
  return (
    <div>
      <HeroSection>
      <HeroSlider>
                  <HeroWrapper>
          <HeroImage src={require('../../images/group-original.jpg').default}/>
          <HeroContent>
                  <h1 className='home'>Contact Us</h1>
          </HeroContent>
      </HeroWrapper>
      </HeroSlider>
      </HeroSection>
      <Signin />
        </div>
    
  );
}