import React from 'react';
import {ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper,ServicesCard, ServicesIcon, ServicesP, ServicesH3} from './ServicesElements';
import Icon1 from '../../images/panel.svg';
import Icon2 from '../../images/mentorship.svg';
import Icon3 from '../../images/essentials.svg';
import Icon4 from '../../images/accelerator.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>See Our Services</ServicesH1>
      <ServicesH3>We empower students to become the best version of themselves</ServicesH3>
      <ServicesWrapper>
      <StyledLink to = '/panels'>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Panels</ServicesH2>
          <ServicesP>Diverse panels of highly motivated post-secondary students to address all of your concerns.</ServicesP>
        </ServicesCard>
        </StyledLink>
        <StyledLink to = '/mentorship'>
                <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Mentorship</ServicesH2>
          <ServicesP>Personalized mentorship from a student with similar academic/career goals.</ServicesP>
        </ServicesCard>
        </StyledLink>
        <StyledLink to = '/essentials'>
                <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Essentials</ServicesH2>
          <ServicesP>Weekly educational articles to help you overcome all of your post-secondary challenges.</ServicesP>
        </ServicesCard>
        </StyledLink>
        <StyledLink to = '/accelerator'>
                <ServicesCard>
          <ServicesIcon src={Icon4}/>
          <ServicesH2>Accelerator</ServicesH2>
          <ServicesP>8-week program for 1st and 2nd year university students to find internship placements.</ServicesP>
        </ServicesCard>
        </StyledLink>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;