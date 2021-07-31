import React from 'react';
import {ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper,ServicesCard, ServicesIcon, ServicesP, ServicesH3} from './ProvideElements';
import Icon1 from '../../images/organize-resume.svg';
import Icon2 from '../../images/organize-resume.svg';
import Icon3 from '../../images/organize-resume.svg';
import Icon4 from '../../images/organize-resume.svg';

const Provide = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>What We Provide</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Resume and cover letter resources</ServicesH2>
          <ServicesP>Diverse panels of highly motivated post-secondary students to address all of your concerns.</ServicesP>
        </ServicesCard>
                <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Mentorship</ServicesH2>
          <ServicesP>	One-on-one mentorship with upper year students who have landed internships in your field of interest</ServicesP>
        </ServicesCard>
                <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Instructional Sessions</ServicesH2>
          <ServicesP>Weekly instructional sessions by experienced mentors to help with every aspect of the recruting process</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Provide;