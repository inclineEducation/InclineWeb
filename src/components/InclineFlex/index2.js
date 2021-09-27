import React from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductCard,
  ProductImg,
  CompanyWrapper
} from './InclineFlexElemenets2';

const CompaniesTwo = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <CompanyWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
            </ProductCard>
          );
        })}
      </CompanyWrapper>
    </ProductsContainer>
  );
};

export default CompaniesTwo;