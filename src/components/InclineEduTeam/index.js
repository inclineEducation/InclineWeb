import React, { useEffect, useState } from 'react';
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

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() =>{ fetchTeam().then(
    (result) => {
      setIsLoaded(true);
      console.log(result);
      setItems(result);
    },
    (error) => {
      setIsLoaded(true);
      setError(error)
    }
  );
  }, []);

  function fetchTeam() {
    return fetch(window.location.protocol + "//" + window.location.hostname + ":" + window.location.port +  "/api/team")
        .then((response) => response.json())
  }

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };
  return (
    <>
    <ServicesContainer id="team">
      <ServicesH1>Meet Our Team</ServicesH1>
      <ServicesWrapper>
        <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
        <GlobalStyle />
        {
        items.map(item => (
          <ServicesCard onClick={openModal}>
            <ServicesIcon src={"/images/team/" + item.name + ".jpg"}/>
            <ServicesP>{item.name}</ServicesP>
          </ServicesCard>
        ))
        }
      </ServicesWrapper>
    </ServicesContainer>

    </>
  )
}

export default InclineTeam;