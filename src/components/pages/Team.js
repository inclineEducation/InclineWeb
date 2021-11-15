import React from 'react';
import Team from '../InclineEduTeam/index';
import AdvisorTeam from '../InclineEduTeam/Advisor';
import { HeroSection, HeroSlider, HeroWrapper, HeroImage, HeroContent, HeroSlide} from '../pages/HeroSection';

const InclineTeam = () => {
  return(
    <>
    <HeroSection>
      <HeroSlider>
        <HeroWrapper>
          <HeroImage src={require('../../images/group-original.jpg').default}/>
          <HeroContent>
            <h1 className='home'>TEAM</h1>
          </HeroContent>
        </HeroWrapper>
      </HeroSlider>
    </HeroSection>
    <Team />
    <AdvisorTeam />
    </>
  );
};

export default InclineTeam;