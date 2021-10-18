import React from 'react';
import { Button } from '../Button';
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, 
  TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElement';

const InfoSectionTwo = ({lightBg, id, imgStart, topLine, lightText,
headline, darkText, description, img, alt, primary, dark, dark2}) => {
  return(
    <>
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
          <TextWrapper>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText}>{headline}</Heading>
            <Subtitle darkText={darkText}>{description}</Subtitle>
          </TextWrapper>
          </Column1>
          <Column2>
          <ImgWrap>
          <Img src={img} alt={alt}/>
          </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSectionTwo;