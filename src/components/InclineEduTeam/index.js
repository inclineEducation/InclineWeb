import React, { useState } from 'react';
import {ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper,ServicesCard, ServicesIcon, ServicesP, ServicesH3} from './TeamElements';
import Icon1 from '../../images/organize-resume.svg';
import Icon2 from '../../images/organize-resume.svg';
import Icon3 from '../../images/organize-resume.svg';
import Icon4 from '../../images/organize-resume.svg';
import Popups from '../InclineEduTeam/Popup';

const InclineTeam = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
    <ServicesContainer id="team">
      <ServicesH1>Meet Our Team</ServicesH1>
      <ServicesWrapper>
        <ServicesCard onClick={() => setButtonPopup(true)}>
          <ServicesIcon src={Icon1}/>
          <ServicesP>Andy Chung</ServicesP>
        </ServicesCard>
        <Popups trigger={buttonPopup} />
                <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesP>Anushka Gupta</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesP>Chris Ng</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesP>Danilo Angulo-Molina</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesP>Ella Koay</ServicesP>
        </ServicesCard>    
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesP>Grace Zhang</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesP>Hasan Altaf</ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesP>Ihor Parkhomenko</ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesP>Jack He</ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesP>Keana Yu</ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesP>Mark Long</ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesP>Matheson Parmar</ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesP>Michelle Lin</ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesP>Nusair Islam</ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesP>Roy Du</ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesP>Selena Yang</ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesP>Talisha Griebach</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesP>Varun Nair</ServicesP>
        </ServicesCard>             
      </ServicesWrapper>
    </ServicesContainer>

    </>
  )
}

export default InclineTeam;