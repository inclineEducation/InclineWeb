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
color: white;

&::before{
  content:"";
  height: 1px;
  width: 50%;
  position: absolute;
  left: 50%;
  bottom: 0;
  border-bottom: 4px solid black;
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
            name="Arundhati Arun Thampi" 
            text="Incline Education’s accelerator program helped me to feel less intimidated by the recruitment process. The mentors were extremely 
                  friendly and helpful which at the end of the day helped me to feel more confident in myself and understand areas that I need to begin working 
                  on. It is a very valuable experience for students who are not sure about how to approach the recruitment process or do not have an idea about 
                  what they would like to do in the future."
            image="Andy"
            />
            <Card 
            name="Selena Yang" 
            text="As a first year student who was unfamiliar with the process of finding internships, the Accelerator Program helped me gain an in-depth 
                  understanding of different elements ranging from resumes to networking, while also being able to tailor to my specific career interests. With 
                  personalized feedback and the team’s insights in the recruiting process, I found it very helpful as I could pinpoint areas that I could work on 
                  and learnt specific ways that I could improve. Both the team and the other cohort members were welcoming, supportive, and personable. Over the 
                  course of several weeks, I learnt a lot and really enjoyed getting to make new friends and connections!"
            image="Anushka"

            />
            <Card 
            name="Ihor Parkhomenko" 
            text="This program helped me connect with incredibly talented students and learn from them about the internship application process. It was such
                a delight to talk with my mentors about practical tips for writing resumes and nailing interview questions, and I'm very much looking forward to
                applying those tips in my future applications. Thank you for this unique opportunity."
            image= "Anushka"

            />
        </Slider>
        </Carousal>
      </Section>
      </div>
    );
  }
}


export default Carousel; 