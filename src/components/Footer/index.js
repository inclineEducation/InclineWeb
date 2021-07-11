import React from 'react';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterLinkItems, FooterLink} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
    <FooterWrap>
    <FooterLinksContainer>
    <FooterLinksWrapper>
    <FooterLinkItems>
      <FooterLinkTitle>About Us </FooterLinkTitle>
        <FooterLink to="/signin">How it works</FooterLink>
        <FooterLink to="/signin">Testimonials</FooterLink>
        <FooterLink to="/signin">Investors</FooterLink>
        <FooterLink to="/signin">Career</FooterLink>
        <FooterLink to="/signin">Terms of Service</FooterLink>
    </FooterLinkItems>
    </FooterLinksWrapper>
        <FooterLinksWrapper>
    <FooterLinkItems>
      <FooterLinkTitle>About Us </FooterLinkTitle>
        <FooterLink to="/signin">How it works</FooterLink>
        <FooterLink to="/signin">Testimonials</FooterLink>
        <FooterLink to="/signin">Investors</FooterLink>
        <FooterLink to="/signin">Career</FooterLink>
        <FooterLink to="/signin">Terms of Service</FooterLink>
    </FooterLinkItems>
    </FooterLinksWrapper>
        <FooterLinksWrapper>
    <FooterLinkItems>
      <FooterLinkTitle>About Us </FooterLinkTitle>
        <FooterLink to="/signin">How it works</FooterLink>
        <FooterLink to="/signin">Testimonials</FooterLink>
        <FooterLink to="/signin">Investors</FooterLink>
        <FooterLink to="/signin">Career</FooterLink>
        <FooterLink to="/signin">Terms of Service</FooterLink>
    </FooterLinkItems>
    </FooterLinksWrapper>
    </FooterLinksContainer>
    </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;