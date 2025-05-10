import styled from 'styled-components';
import { theme } from '../theme';

const TipsSection = styled.section`
  padding: ${theme.spacing.large};
  background-color: ${theme.colors.background};
  min-height: 80vh;
`;

const TipsTitle = styled.h1`
  font-family: ${theme.fonts.main};
  font-size: 36px;
  color: ${theme.colors.text};
  text-align: center;
  margin-bottom: ${theme.spacing.medium};
`;

const TipCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};
  padding: ${theme.spacing.medium};
  margin-bottom: ${theme.spacing.medium};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const TipTitle = styled.h3`
  font-family: ${theme.fonts.main};
  font-size: 24px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.small};
`;

const TipDescription = styled.p`
  font-family: ${theme.fonts.main};
  font-size: 16px;
  color: ${theme.colors.text};
`;

function TipsPage() {
  return (
    <TipsSection>
      <TipsTitle>Советы по питанию и восстановлению</TipsTitle>
      <TipCard>
        <TipTitle>Совет 1: Белки после тренировки</TipTitle>
        <TipDescription>
          Употребляйте 20-30 г белка в течение 30 минут после тренировки для восстановления мышц.
        </TipDescription>
      </TipCard>
      <TipCard>
        <TipTitle>Совет 2: Сон</TipTitle>
        <TipDescription>Спите 7-9 часов в сутки для лучшего восстановления.</TipDescription>
      </TipCard>
    </TipsSection>
  );
}

export default TipsPage;