import styled from 'styled-components';
import { theme } from '../theme';

const ProgramsSection = styled.section`
  padding: ${theme.spacing.large};
  text-align: center;
  background-color: ${theme.colors.background};
  min-height: 80vh;
`;

const ProgramsTitle = styled.h1`
  font-family: ${theme.fonts.main};
  font-size: 36px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.large};
`;

const ProgramsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.medium};
  flex-wrap: wrap;
`;

const ProgramCard = styled.div`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.medium};
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};
  width: 300px;
  text-align: center;
`;

const ProgramTitle = styled.h2`
  font-family: ${theme.fonts.main};
  font-size: 24px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.small};
`;

const ProgramDescription = styled.p`
  font-family: ${theme.fonts.main};
  font-size: 16px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.medium};
`;

const ProgramPrice = styled.p`
  font-family: ${theme.fonts.main};
  font-size: 18px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.medium};
`;

const ProgramButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 10px 20px;
  border: none;
  border-radius: ${theme.borderRadius};
  font-family: ${theme.fonts.main};
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

function ProgramsPage() {
  return (
    <ProgramsSection>
      <ProgramsTitle>Программы тренировок</ProgramsTitle>
      <ProgramsGrid>
        <ProgramCard>
          <ProgramTitle>Индивидуальная программа</ProgramTitle>
          <ProgramDescription>Персональный план тренировок</ProgramDescription>
          <ProgramPrice>Цена: 5000 ₸</ProgramPrice>
          <ProgramButton>Купить</ProgramButton>
        </ProgramCard>
        <ProgramCard>
          <ProgramTitle>Групповая программа</ProgramTitle>
          <ProgramDescription>Тренировки для группы</ProgramDescription>
          <ProgramPrice>Цена: 3000 ₸</ProgramPrice>
          <ProgramButton>Купить</ProgramButton>
        </ProgramCard>
      </ProgramsGrid>
    </ProgramsSection>
  );
}

export default ProgramsPage;