import React from 'react';
import styled from 'styled-components';


export const FooterContainer = styled.footer `
background-color: black;
justify-content: center;
`

export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
display:flex;
justify-content: center;
flex-direction: row;
grid-template-column: 1fr 1fr 1fr;

@media screen and (max-width: 820px){
  padding-top: 32px;
}
`
export const FooterLinksWrapper = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px){
  flex-direction: column;
}
`

export const FooterLinkItems= styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 50px;
text-align: left;
width: 250px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px){
  margin: 0;
  padding: 10px;
  width: 100%;
}
`

export const FooterLinkTitle = styled.h1`
font-size: 1rem;
margin-bottom: 16px;
`

export const FooterLink = styled.h2`
color: #fff
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;

&:hover{
  color: #01bf71;
  transition: 0.3 ease-out;
}
`

export const FooterText = styled.h2`
color: #fff
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;

}
`