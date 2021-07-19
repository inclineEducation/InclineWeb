import React, {useState} from 'react';
import {ServicesContainer, ServicesH1, ServicesH2, ServicesH3, StyledArrowContainer, ServicesCard, ServicesP} from './TestimonialElements'
import { MdKeyboardArrowRight } from 'react-icons/md'
import first from './Individual-Testimonials/Tiffany';
import second from './Individual-Testimonials/Arundhati';
import third from './Individual-Testimonials/Daniel';
import fourth from './Individual-Testimonials/Selena';
import fifth from './Individual-Testimonials/Ihor';
const firs = () => {
    <ServicesCard>
      <ServicesH1>Tiffany Anderson</ServicesH1>
      <ServicesP>Chris helpful and stuff</ServicesP>
    </ServicesCard>

}

const testimonials = [firs, second, third, fourth, fifth];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const nextIndex = () => {
    setCurrentIndex(prevIndex => prevIndex + 1);
  }
  return(
    <ServicesContainer>
      {testimonials[currentIndex]}
      <StyledArrowContainer>
        <MdKeyboardArrowRight onClick={nextIndex} />
      </StyledArrowContainer>
</ServicesContainer>
  )
}

export default Slider;