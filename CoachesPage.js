import styled from 'styled-components';
import { theme } from '../theme';

const CoachesSection = styled.section`
  padding: ${theme.spacing.large};
  text-align: center;
  background-color: ${theme.colors.background};
  min-height: 80vh;
`;

const CoachesTitle = styled.h1`
  font-family: ${theme.fonts.main};
  font-size: 36px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.large};
`;

const CoachesGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.medium};
  flex-wrap: wrap;
`;

const CoachCard = styled.div`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.medium};
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};
  width: 300px;
  text-align: center;
`;

const CoachImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${theme.borderRadius};
  margin-bottom: ${theme.spacing.medium};
`;

const CoachName = styled.h2`
  font-family: ${theme.fonts.main};
  font-size: 24px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.small};
`;

const CoachDescription = styled.p`
  font-family: ${theme.fonts.main};
  font-size: 16px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.medium};
`;

const CoachButton = styled.button`
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

function CoachesPage() {
  // Пример данных тренеров (в будущем можно будет получать из API)
  const coaches = [
    {
      name: 'Алексей Иванов',
      image: 'https://via.placeholder.com/300x200?text=Алексей+Иванов',
      description: 'Специалист по силовым тренировкам с 10-летним опытом.',
    },
    {
      name: 'Мария Петрова',
      image: 'https://via.placeholder.com/300x200?text=Мария+Петрова',
      description: 'Эксперт по йоге и функциональному тренингу.',
    },
    {
      name: 'Дмитрий Смирнов',
      image: 'https://via.placeholder.com/300x200?text=Дмитрий+Смирнов',
      description: 'Тренер по кроссфиту и кардио.',
    },
  ];

  return (
    <CoachesSection>
      <CoachesTitle>Наши тренеры</CoachesTitle>
      <CoachesGrid>
        {coaches.map((coach, index) => (
          <CoachCard key={index}>
            <CoachImage src={coach.image} alt={coach.name} />
            <CoachName>{coach.name}</CoachName>
            <CoachDescription>{coach.description}</CoachDescription>
            <CoachButton>Записаться</CoachButton>
          </CoachCard>
        ))}
      </CoachesGrid>
    </CoachesSection>
  );
}

export default CoachesPage;

