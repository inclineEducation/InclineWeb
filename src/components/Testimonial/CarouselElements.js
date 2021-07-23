import styled from 'styled-components';

const CARD = styled.div`
background-color: blue;
color: white;
height: calc(8rem + 12vw);
width: calc(9rem + 12vw);
border-radius: 30px;
margin-top: calc(5rem + 5vw);
justify-content: center;
height: 500px;
width: 600px;
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
filter: drop-shadow(0px -3px 3px var(--nav2));
`;

const Text = styled.h4`
padding: 100px calc(1rem + 3vw);
font-size: calc(0.6rem + 0.5vw);
text-align: center;
color: black;
`;

const NAME = styled.h3`
color: pink;
font-size: calc(0.5rem + 2vw);
justify-content: center;
text-align: center;
position: absolute;
padding: calc(1rem + 3vw) calc(1rem + 3vw);

`;

const Card = ({ name, text, image}) => {
  /*const Avatar = <img src={require(`../../images/team/${image}.jpg`).default} />; */
  const Avatar = () => {
  if (typeof(image) !== 'undefined'){
    return (<img src={require(`../../images/team/${image}.jpg`).default} />);
  }
  else {
    return("Error")
  }
  };
  return(
    <CARD>
      <Image img = {Avatar} width="400" height="400"/>
      <Text>{text}</Text>
      <NAME>{name}</NAME>
    </CARD>
  );
};

export default Card;