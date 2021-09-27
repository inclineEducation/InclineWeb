import styled from 'styled-components';


export const StyledArrowContainer = styled.div`
font-size: 35px;
width: 50px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;

:hover {
  background-color: #fff;
}
`

export const ServicesContainer = styled.div`
height: 300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #808080;


@media screen and (max-width: 768px){
  height: 1100px;
}

@media screen and (max-width: 480px){
  height: 1300px;
}
`


export const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
width: 400px;
padding: 30px;
box-shadow: 0 1 px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover{
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
`
export const ServicesIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #000000;
margin-bottom: 64px;
text-align: center;

@media screen and (max-width: 480x){
  font-size 2rem;
}
`
export const ServicesH2 = styled.h2`
font-size:1rem;
margin-bottom: 10px;
`

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`

export const ServicesH3 = styled.h1`
font-size:1.5rem;
margin-bottom: 40px;
color: #fff;
`