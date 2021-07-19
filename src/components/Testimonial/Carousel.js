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

const images = [Anushka, Andy, Chris, Grace];

const Img = styled.img`
  height: 150px;
  width: 30px;
  min-width: 300px;
  max-width: 100%;
`;

const CarouselContainer = styled.div`
height: 800px;
width: 800px;
justify-content: center;
align-items: center;
background: #fff;
padding: 30px;
}
`

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}


class Carousel extends Component {
    render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 500,
      cssEase: "linear"
    };
    return (
      <div>
        <CarouselContainer>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
            <Img src={Anushka} alt="Anushka" />
            <h3>1</h3>
          </div>
          <div>
            <Img src={Anushka} alt="Anushka" />
            <h3>2</h3>
          </div>
          <div>
            <Img src={Anushka} alt="Anushka" />
            <h3>3</h3>
          </div>
          <div>
            <Img src={Anushka} alt="Anushka" />
            <h3>4</h3>
          </div>
          <div>
            <Img src={Anushka} alt="Anushka" />
            <h3>5</h3>
          </div>
          <div>
            <Img src={Anushka} alt="Anushka" />
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
        </CarouselContainer>
      </div>
    );
  }
}


export default Carousel; 