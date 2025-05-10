import { useState, useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginSection = styled.section`
  padding: ${theme.spacing.large};
  text-align: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.medium};
  max-width: 400px;
  margin: 0 auto;
`;

const LoginInput = styled.input`
  padding: ${theme.spacing.small};
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const LoginButton = styled.button`
  background: ${theme.colors.primary};
  color: #fff;
  border: none;
  padding: ${theme.spacing.small} ${theme.spacing.medium};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.primaryDark};
  }
`;

const ErrorMessage = styled.p`
  color: red;
`;

const SuccessMessage = styled.p`
  color: green;
`;

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      await login(username, password);
      setSuccess('Вход выполнен успешно!');
      setTimeout(() => navigate('/'), 2000); // Перенаправляем на главную страницу
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <LoginSection>
      <h1>Вход</h1>
      <LoginForm onSubmit={handleSubmit}>
        <LoginInput
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <LoginInput
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <LoginButton type="submit">Войти</LoginButton>
      </LoginForm>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
    </LoginSection>
  );
};

export default LoginPage;