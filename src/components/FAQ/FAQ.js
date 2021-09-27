  
import React, { useState } from 'react';
import { dataOne } from './data'
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import InfoSection from '../InfoSection/index';
import { homeObjThree, homeObjFour} from '../InfoSection/Data';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: black;

  @media screen and (max-width: 768px){
  height: 1100px;
}

@media screen and (max-width: 480px){
  height: 1300px;
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  background: white;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1600x;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 2rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: white;
  color: black;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1.5rem;
  }

`;

const AccordionH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: auto;
justify-content: center;
text-align; center;

@media screen and (max-width: 480x){
  font-size 2rem;
}
`
const AccordionH2 = styled.h2`
 max-width: 930px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: white;
`
const ContainerH1 = styled.div`
z-index: 1;
height: 20vh;
width: 100%;
max-width: 1100px;
justify-content: center;
position: absolute;
align-items:  center;
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    
    <IconContext.Provider value={{ color: 'yellow', size: '25px' }}>
            <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour}/>
      <ContainerH1><AccordionH1>Frequently Asekd Questions</AccordionH1></ContainerH1>
      <AccordionSection>
        <Container>
          {dataOne.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;