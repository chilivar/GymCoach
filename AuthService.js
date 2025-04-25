import api from './api/axios';

const AuthService = {
  // Получить всех пользователей
  getAllUsers: async () => {
    try {
      const response = await api.get('/api/auth');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || 'Ошибка при получении пользователей');
    }
  },

  // Регистрация
  register: async (username, password, email, roleId = 3) => {
    try {
      const response = await api.post('/api/auth/register', {
        username,
        password,
        email,
        roleId,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || 'Ошибка при регистрации');
    }
  },

  // Вход
  login: async (username, password) => {
    try {
      const response = await api.post('/api/auth/login', {
        username,
        password,
      });
      return response.data; // Возвращает { token: "..." }
    } catch (error) {
      throw new Error(error.response?.data || 'Ошибка при входе');
    }
  },

  // Проверка статуса токена
  validateToken: async (token) => {
    try {
      const response = await api.get('/api/auth/status', {
        data: { token },
      });
      return response.data === 'Success';
    } catch (error) {
      throw new Error(error.response?.data || 'Неверный токен');
    }
  },

  // Выход
  logout: async (token) => {
    try {
      const response = await api.post('/api/auth/logout', {
        token,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || 'Ошибка при выходе');
    }
  },

  // Подтверждение email
  confirmEmail: async (token) => {
    try {
      const response = await api.get(`/api/auth/confirm-email?token=${token}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || 'Неверный токен для подтверждения email');
    }
  },

  // Проверка доступа администратора
  checkAdminAccess: async (token) => {
    try {
      const response = await api.get(`/api/auth/admin-access?token=${token}`);
      return response.data === 'Доступ к админ-панели предоставлен';
    } catch (error) {
      throw new Error(error.response?.data || 'Доступ к админ-панели запрещен');
    }
  },

  // Обновление пользователя (для админов)
  updateUser: async (adminToken, user) => {
    try {
      const response = await api.put(`/api/auth/admin/update-user?adminToken=${adminToken}`, user);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || 'Ошибка при обновлении пользователя');
    }
  },
};

export default AuthService;