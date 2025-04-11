import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const ShopSection = styled.section`
  padding: ${theme.spacing.large};
  background-color: ${theme.colors.background};
  min-height: 80vh;
`;

const ShopTitle = styled.h1`
  font-family: ${theme.fonts.main};
  font-size: 36px;
  color: ${theme.colors.text};
  text-align: center;
  margin-bottom: ${theme.spacing.medium};
`;

const ShopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.medium};
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};
  padding: ${theme.spacing.medium};
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductName = styled.h3`
  font-family: ${theme.fonts.main};
  font-size: 24px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.small};
`;

const ProductPrice = styled.p`
  font-family: ${theme.fonts.main};
  font-size: 18px;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.small};
`;

const ProductButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  padding: 10px 20px;
  border-radius: ${theme.borderRadius};
  font-family: ${theme.fonts.main};
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

function ShopPage() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Протеин', price: 2000 },
    { id: 2, name: 'Гантели 5 кг', price: 1500 },
  ]);

  return (
    <ShopSection>
      <ShopTitle>Магазин</ShopTitle>
      <ShopGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>Цена: {product.price} руб.</ProductPrice>
            <ProductButton>Добавить в корзину</ProductButton>
          </ProductCard>
        ))}
      </ShopGrid>
    </ShopSection>
  );
}

export default ShopPage;