import React, { useRef } from 'react';
import '../../App.css';
import { HeroSection, HeroSlider, HeroWrapper, HeroImage, HeroContent, HeroSlide} from '../pages/HeroSection';
import Services from '../Services/index';
import Companies from '../InclineFlex/index';
import Carousel from '../Testimonial/Carousel';
import { companyData } from '../InclineFlex/data';
import { companyDataTwo } from '../InclineFlex/data';
import { companyDataThree } from '../InclineFlex/data';
import Contact from '../Contact/index';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


export default function About() {
  const parallax = useRef(!null)
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
      <Parallax ref={parallax} pages={8}>
      <ParallaxLayer
    offset={0}
    speed={1.5}>
      <Services />
      </ParallaxLayer>
      <ParallaxLayer
          offset={0}
          speed={0}
          factor={2}
        />
      
      <ParallaxLayer
    offset={1}
    speed={0.5}>
      <Companies heading='As Seen In' data={companyData} />
      </ParallaxLayer>
      
      <ParallaxLayer
    offset={2}
    speed={2.5}>
      <Companies heading='Our Mentors Have Been At' data={companyDataTwo} />
      </ParallaxLayer>
      </Parallax>
      <Carousel />
      <Contact />
    </>
  );
}