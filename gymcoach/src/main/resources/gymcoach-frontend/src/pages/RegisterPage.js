import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const RegisterSection = styled.section`
  padding: ${theme.spacing.large};
  text-align: center;
  background-color: ${theme.colors.background};
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterForm = styled.form`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.large};
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};
  width: 100%;
  max-width: 400px;
`;

const RegisterTitle = styled.h1`
  font-family: ${theme.fonts.main};
  font-size: 36px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.large};
`;

const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.medium};
  text-align: left;
`;

const Label = styled.label`
  font-family: ${theme.fonts.main};
  font-size: 16px;
  color: ${theme.colors.text};
  display: block;
  margin-bottom: ${theme.spacing.small};
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${theme.colors.gray};
  border-radius: ${theme.borderRadius};
  font-family: ${theme.fonts.main};
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
  }
`;

const ErrorMessage = styled.p`
  font-family: ${theme.fonts.main};
  font-size: 14px;
  color: ${theme.colors.secondary};
  margin-top: ${theme.spacing.small};
`;

const RegisterButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 10px 20px;
  border: none;
  border-radius: ${theme.borderRadius};
  font-family: ${theme.fonts.main};
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  margin-top: ${theme.spacing.medium};

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Имя обязательно';
    if (!formData.email) newErrors.email = 'Email обязателен';
    if (!formData.password) newErrors.password = 'Пароль обязателен';
    else if (formData.password.length < 6) newErrors.password = 'Пароль должен быть не менее 6 символов';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    // Здесь можно отправить данные на сервер (например, через API)
    console.log('Форма отправлена:', formData);
    alert('Регистрация успешна!');
    setFormData({ name: '', email: '', password: '' });
    setErrors({});
  };

  return (
    <RegisterSection>
      <RegisterForm onSubmit={handleSubmit}>
        <RegisterTitle>Регистрация</RegisterTitle>
        <FormGroup>
          <Label htmlFor="name">Имя</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Введите ваше имя"
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Введите ваш email"
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Пароль</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Введите ваш пароль"
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </FormGroup>
        <RegisterButton type="submit">Зарегистрироваться</RegisterButton>
      </RegisterForm>
    </RegisterSection>
  );
}

export default RegisterPage;