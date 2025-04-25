import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

const HeroSection = styled.section`
  background-color: ${theme.colors.background};
  padding: ${theme.spacing.large};
  text-align: center;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.h1`
  font-family: ${theme.fonts.main};
  font-size: 48px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.medium};
`;

const HeroButton = styled(Link)`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 12px 24px;
  border-radius: ${theme.borderRadius};
  text-decoration: none;
  font-family: ${theme.fonts.main};
  font-size: 18px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

function HomePage() {
  return (
    <HeroSection>
      <HeroTitle>Добро пожаловать на GymCoach!</HeroTitle>
      <HeroButton to="/programs">Выберите программу</HeroButton>
    </HeroSection>
  );
}

export default HomePage;