import api from './api/axios';

const TrainerService = {
  getAllTrainers: async (lang = 'ru') => {
    try {
      const response = await api.get(`/api/trainers?lang=${lang}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || 'Ошибка при получении тренеров');
    }
  },
};

export default TrainerService;