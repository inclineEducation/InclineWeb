import styled from 'styled-components';
import Anushka from '../../images/team/Anushka.jpg'
import ReactRoundedImage from "react-rounded-image";

const CARD = styled.div`
background-color: white;
color: white;
height: calc(8rem + 12vw);
width: calc(9rem + 12vw);
border-radius: 30px;
margin-top: calc(5rem + 5vw);
justify-content: center;
align-items: center;
height: 60vh;
width: 42vw;
textAlign: 'center'
`

const Image = styled.div`
width: 40%;
height: 40%;
background: url(${(props) => props.img});
background-repeat: no-repeat;
background-size: cover;
background-position: top;
position: absolute;
left: 50%;
bottom: 80%;
transform: translate(-50%);
border-radius: 50%;
filter: drop-shadow(0px -3px 3px var(white));
`;

const TextWrapper = styled.div`
align-items: center;
justify-content: center;
vertical-align: middle;
display: flex;
text-align: center;
`
const Text = styled.h4`
padding: 21.5vh calc(2rem + 3vw);
font-size: calc(0.5rem + 0.5vw);
text-align: center;
color: black;
position: relative;
`;

const NAMEWrapper = styled.div`
align-items: center;
justify-content: center;
vertical-align: middle;
display: flex;
text-align: center;

`
const NAME = styled.h3`
color: black;
font-size: calc(0.5rem + 2vw);
justify-content: center;
position: absolute;
bottom: 8vh;



`;

const ImgWrapper = styled.div`
display: grid;
margin-right: auto;
margin-left: auto;
align-items: center;
padding: 1.5vh 15.32vw;

justify-content: center;
position: absolute;
text-align: center;
`


const Card = ({ name, text, image}) => {
  const Avatar = <img src={require(`../../images/team/${image}.jpg`).default} />; 
  /*const Avatar = () => {
  if (typeof(image) !== 'undefined'){
    return (<img src={require(`../../images/team/${image}.jpg`).default} />);
  }
  else {
    return("Error")
  }
  };*/
  return(
    <CARD>
      <ImgWrapper>
      <ReactRoundedImage
          image={Avatar}
          roundedColor="white"
          imageWidth="150"
          imageHeight="150"
          roundedSize="4"
          borderRadius="70"
        />
        </ImgWrapper>
      <TextWrapper><Text>{text}</Text></TextWrapper>
      <NAMEWrapper><NAME>{name}</NAME></NAMEWrapper>
    </CARD>
  );
};

export default Card;