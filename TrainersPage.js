import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import TrainerService from '../TrainerService'; // Обновленный импорт

const TrainerSection = styled.section`
  padding: ${theme.spacing.large};
  text-align: center;
`;

const TrainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.large};
  justify-content: center;
`;

const TrainerCard = styled.div`
  background: ${theme.colors.white};
  padding: ${theme.spacing.medium};
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};
  width: 200px;
`;

const ErrorMessage = styled.p`
  font-family: ${theme.fonts.main};
  font-size: 14px;
  color: ${theme.colors.secondary};
  margin-top: ${theme.spacing.small};
`;

const TrainersPage = () => {
  const [trainers, setTrainers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const data = await TrainerService.getAllTrainers('ru');
        setTrainers(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchTrainers();
  }, []);

  return (
    <TrainerSection>
      <h1>Тренеры</h1>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <TrainerList>
        {trainers.length > 0 ? (
          trainers.map((trainer) => (
            <TrainerCard key={trainer.id}>
              <h3>{trainer.name}</h3>
              <p>Специализация: {trainer.specialization}</p>
              <p>Опыт: {trainer.experience} лет</p>
            </TrainerCard>
          ))
        ) : (
          <p>Тренеры отсутствуют</p>
        )}
      </TrainerList>
    </TrainerSection>
  );
};

export default TrainersPage;