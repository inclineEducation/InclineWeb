import React, { useState } from 'react';
import {ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper,ServicesCard, ServicesIcon, ServicesP, ServicesH3} from './AdvisorElements';
import Anushka from '../../images/team/Anushka.jpg';
import Andy from '../../images/team/Andy.jpg';
import { Modal } from './Modal';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
}
`

const AdvisorTeam = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };
  return (
    <>
    <ServicesContainer id="team">
      <ServicesH1>Meet Our Advisor Team</ServicesH1>
      <ServicesWrapper>
        <ServicesCard onClick={openModal}>
          <ServicesIcon src={Andy}/>
          <ServicesP>Andy Chung</ServicesP>
        </ServicesCard>
        <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
      <GlobalStyle />
                <ServicesCard onClick={openModal}>
          <ServicesIcon src={Anushka}/>
          <ServicesP>Anushka Gupta</ServicesP>
          </ ServicesCard>
          <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
      </ServicesWrapper>
    </ServicesContainer>

    </>
  )
}

export default AdvisorTeam;