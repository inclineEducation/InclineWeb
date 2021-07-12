import React from 'react';
import '../../App.css';
import InfoSection from '../InfoSection/index';
import {homeObjOne, homeObjTwo} from  '../InfoSection/Data';
import Services from '../Services/index';
import Footer from '../Footer/index';
import styled, { css } from 'styled-components';

const HeroSection = styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
overflow: hidden;
`

const HeroWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`

const HeroImage = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
object-fit: cover;
`

const HeroSlider = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

&::before {
  content: '';
  position: absolute;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  bottom: 0wh;
  left: 0;
  overflow: hidden;
  opactiy: 0.4;
  background: linear-gradient(0deg, 
    rgba(0,0,0,0.2) 0%,
    rgba(0,0,0,0.2) 50%,
    rgba(0,0,0,0.6) 100%,);
}
`
const HeroContent = styled.div`
position: relative;
z-index: 10;
display: flex;
flex-direction: column;
max-width: 1600px;
width: calc(100% - 100px);
color: #fff;

h1{
  font-size: clamp(1rem, 8vw, 5rem);
  font-weight: 400;
  text-transform: uppercase;
  text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
  text-align: left;
  margin-bottom: 0.8rem;
}
`

const HeroSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;
`

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
        </div>
    
  );
}