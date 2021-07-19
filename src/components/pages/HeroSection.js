import styled, { css } from 'styled-components';

export const HeroSection = styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
overflow: hidden;
`

export const HeroWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`

export const HeroImage = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
object-fit: cover;
`

export const HeroSlider = styled.div`
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
export const HeroContent = styled.div`
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

export const HeroSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;
`