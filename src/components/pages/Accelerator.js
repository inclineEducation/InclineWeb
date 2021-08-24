import React from 'react';
import '../../App.css';
import Services from '../Services/index';
import Contact from '../Contact/index';
import Companies from '../InclineFlex/index';
import { companyDataTwo } from '../InclineFlex/data';
import { companyDataThree } from '../InclineFlex/data';
import Timeline from '../Timeline/Timeline';
import Provide from '../Provide/index';
import InfoSection from '../InfoSection/index';
import InfoSectionTwo from '../InfoSection/index2';
import { homeObjFive, homeObjSix} from '../InfoSection/Data';

export default function Accelerator() {
  return (
    <>
      <h1 className='accelerator'>Accelerator Program</h1>
      <InfoSectionTwo {...homeObjFive} />
          <Provide />
          <InfoSectionTwo {...homeObjSix} />
          <Timeline />
            <Companies heading='Our Mentors Have Been At' data={companyDataTwo} />
      <Services />
      <Contact />
      
    </>
  );
}