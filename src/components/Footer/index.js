import React from 'react';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, 
  FooterLinkTitle, FooterLinkItems, FooterLink, FooterText,} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
    <FooterWrap>
    <FooterLinksContainer>
    <FooterLinksWrapper>
    <FooterLinkItems>
      <FooterLinkTitle>About Incline Education</FooterLinkTitle>
        <FooterText>We are a team of university students from various 
        faculties who have come together for the sole purpose of helping students 
        achieve more out of their university experience and beyond.</FooterText>
    </FooterLinkItems>
    </FooterLinksWrapper>
        <FooterLinksWrapper>
    <FooterLinkItems>
      <FooterLinkTitle>Contact</FooterLinkTitle>
        <FooterLink to="/signin">Email: contact@inclineedu.org</FooterLink>
        <FooterLink to="/signin">Facebook: @incline.education</FooterLink>
        <FooterLink to="/signin">Instagram: @incline.education</FooterLink>
        <FooterLink to="/signin">LinkedIn: Incline Education</FooterLink>
    </FooterLinkItems>
    </FooterLinksWrapper>
        <FooterLinksWrapper>
    <FooterLinkItems>
      <FooterLinkTitle>Quick Links </FooterLinkTitle>
        <FooterLink to="/about">About</FooterLink>
        <FooterLink to="/signin">Admin</FooterLink>
        <FooterLink to="/signin">Terms of Use</FooterLink>
        <FooterLink to="/signin">Privacy Policy </FooterLink>
    </FooterLinkItems>
    </FooterLinksWrapper>
    </FooterLinksContainer>
    </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;