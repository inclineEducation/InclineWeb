import React, { Component } from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Anushka from '../../images/team/Anushka.jpg'
import Andy from '../../images/team/Andy.jpg'
import Chris from '../../images/team/Chris.jpg'
import Grace from '../../images/team/Grace.jpg'
/*import Slider from 'react-styled-carousel';*/
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Testimonial from './CarouselElements';
import Card from './CarouselElements';

const Section = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
padding: 5rem 0;
`
const Title = styled.h1`
display: inline-block;
font-size: calc(1rem + 1.5vw);
margin-top: 1rem;
position: relative;

&::before{
  content:"";
  height: 1px;
  width: 50%;
  position: absolute;
  left: 50%;
  bottom: 0;
  border-bottom: 2px solid var(--purple);
  transform: translate(-50%);
}
`
const Carousal = styled.div`
width: 90vw;
display: flex;
flex-direction: column;
justify-content: center;

@media only Screen and (max-width:40em){
  width: 90vw;
  .slick-slider .slick-arrow{
    display: none;
  }
}

.slick-slider .slick-arrow:before{
  color: black;
  font-size: 1.5rem;
}

.slick-slide.slick-active{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  margin-bottom: 3rem;
}
`
class Carousel extends Component {
    render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      lazyload: true, 
      initialSlide: 2
    };
    return (
      <div>
        <Section>
          <Title>Testimonials</Title>
        <Carousal>
        <Slider {...settings}>
            <Card
            name="Daniel Wang" 
            text="Prospective university freshmen like me often have too many questions and are usually confused about the process of \
		transitioning from high school to university life. IE Mentorship was able to tailor to my needs and quickly match a requested mentor \
		that has similar interests, backgrounds, and career interests as me. As a completely free service made by students for students, \
		IE Mentorship is a valuable platform to help you out and make friends that would benefit you long afterwards!"
    image="Anushka"/>
            <Card 
            name="Tiffany Anderson" 
            text="Chris and his colleagues were professional, fun, and very informative. My students thoroughly enjoyed their visit!"
            image="Anushka"
            />
            <Card 
            name="Anushka" 
            text="hello"
            image="Andy"
            />
            <Card 
            name="Anushka" 
            text="hello"
            image="Anushka"

            />
            <Card 
            name="Anushka" 
            text="hello"

            />
        </Slider>
        </Carousal>
      </Section>
      </div>
    );
  }
}


export default Carousel; 