import React, { useState } from 'react';
import {ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper,ServicesCard, ServicesIcon, ServicesP, ServicesH3} from './TeamElements';
import Anushka from '../../images/team/Anushka.jpg';
import Andy from '../../images/team/Andy.jpg';
import Chris from '../../images/team/Chris.jpg';
import Danilo from '../../images/team/Danilo.jpg';
import Ella from '../../images/team/Ella.jpg';
import Roy from '../../images/team/Roy.png';
import Nusair from '../../images/team/Nusair.jpg';
import Matheson from '../../images/team/Matheson.jpg';
import Michelle from '../../images/team/Michelle.jpg';
import Talisha from '../../images/team/Talisha.jpg';
import Varun from '../../images/team/Varun.jpg';
import Jack from '../../images/team/Jack.jpg';
import Hasan from '../../images/team/Hasan.jpg';
import Selena from '../../images/team/Selena.jpg';
import Grace from '../../images/team/Grace.jpg'
import Popups from '../InclineEduTeam/Popup';
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

const InclineTeam = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };
  return (
    <>
    <ServicesContainer id="team">
      <ServicesH1>Meet Our Team</ServicesH1>
      <ServicesWrapper>
        <ServicesCard onClick={openModal}>
          <ServicesIcon src={Andy}/>
          <ServicesP>Andy Chung</ServicesP>
        </ServicesCard>
        <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
      <GlobalStyle />
                <ServicesCard>
          <ServicesIcon src={Anushka}/>
          <ServicesP>Anushka Gupta</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Chris}/>
          <ServicesP>Chris Ng</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Danilo}/>
          <ServicesP>Danilo Angulo-Molina</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Ella}/>
          <ServicesP>Ella Koay</ServicesP>
        </ServicesCard>    
        <ServicesCard>
          <ServicesIcon src={Grace}/>
          <ServicesP>Grace Zhang</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Hasan}/>
          <ServicesP>Hasan Altaf</ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Anushka}/>
          <ServicesP>Ihor Parkhomenko</ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Jack}/>
          <ServicesP>Jack He</ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Anushka}/>
          <ServicesP>Keana Yu</ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Anushka}/>
          <ServicesP>Mark Long</ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Matheson}/>
          <ServicesP>Matheson Parmar</ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Michelle}/>
          <ServicesP>Michelle Lin</ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Nusair}/>
          <ServicesP>Nusair Islam</ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Roy}/>
          <ServicesP>Roy Du</ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Selena}/>
          <ServicesP>Selena Yang</ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Talisha}/>
          <ServicesP>Talisha Griebach</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Varun}/>
          <ServicesP>Varun Nair</ServicesP>
        </ServicesCard>             
      </ServicesWrapper>
    </ServicesContainer>

    </>
  )
}

export default InclineTeam;