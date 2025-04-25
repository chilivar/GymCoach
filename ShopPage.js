import styled from 'styled-components';
import { theme } from '../theme';

const ShopSection = styled.section`
  padding: ${theme.spacing.large};
  text-align: center;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.large};
  justify-content: center;
`;

const ProductCard = styled.div`
  background: ${theme.colors.white};
  padding: ${theme.spacing.medium};
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};
  width: 200px;
  text-align: left;
`;

const ProductTitle = styled.h3`
  font-family: ${theme.fonts.main};
  font-size: 18px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.small};
`;

const ProductDescription = styled.p`
  font-family: ${theme.fonts.main};
  font-size: 14px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.small};
`;

const ProductButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 8px 16px;
  border: none;
  border-radius: ${theme.borderRadius};
  font-family: ${theme.fonts.main};
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

const ShopPage = () => {
  // Тестовые данные
  const products = [
    {
      id: 1,
      title: 'Гантели 5 кг',
      description: 'Идеальны для домашних тренировок.',
    },
    {
      id: 2,
      title: 'Коврик для йоги',
      description: 'Прочный и нескользящий.',
    },
  ];

  return (
    <ShopSection>
      <h1>Магазин</h1>
      <ProductList>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id}>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductButton>Добавить в корзину</ProductButton>
            </ProductCard>
          ))
        ) : (
          <p>Товары отсутствуют</p>
        )}
      </ProductList>
    </ShopSection>
  );
};

export default ShopPage;