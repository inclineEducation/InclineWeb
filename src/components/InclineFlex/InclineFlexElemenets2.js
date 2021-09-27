import styled from 'styled-components';

export const ProductsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;
height: 130vh;
padding-bottom: 10vh;

@media screen and (max-width: 768px){
  height: 1100px;
}

@media screen and (max-width: 480px){
  height: 1100px;
}
`;

export const ProductWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;

align-items: center;
grid-gap: 16px;


@media screen and (max-width: 1000px){
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

@media screen and (max-width: 768px){
  grid-template-columns: 1fr;
  padding: 0 20px;
}
`;

export const CompanyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-height: 250px;
grid-template-columns: 1fr 1fr 1fr 1fr;
`

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  width: 100px;
  height: 200px;
  min-width: 300px;
  max-width: 100%;
  object-fit: contain;
  
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: black;
`;