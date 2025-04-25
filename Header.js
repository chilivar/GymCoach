import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { AuthContext } from '../context/AuthContext';

const HeaderContainer = styled.header`
  background: ${theme.colors.primary};
  padding: ${theme.spacing.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: #fff;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: ${theme.spacing.medium};
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <HeaderContainer>
      <Logo>GymCoach</Logo>
      <Nav>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/programs">Программы</NavLink>
        <NavLink to="/coaches">Советы</NavLink> // Добавляем обратно
        <NavLink to="/shop">Магазин</NavLink>
        <NavLink to="/trainers">Тренеры</NavLink>
        {!isAuthenticated ? (
          <>
            <NavLink to="/register">Регистрация</NavLink>
            <NavLink to="/login">Вход</NavLink>
          </>
        ) : (
          <LogoutButton onClick={handleLogout}>Выход</LogoutButton>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;