import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

const HeaderWrapper = styled.header`
  background-color: ${theme.colors.primary};
  padding: ${theme.spacing.medium};
  box-shadow: ${theme.boxShadow};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.h1`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.main};
  font-size: 24px;
  margin: 0;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: ${theme.spacing.medium};
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  a {
    color: ${theme.colors.white};
    text-decoration: none;
    font-family: ${theme.fonts.main};
    font-size: 16px;
    transition: color 0.3s;

    &:hover {
      color: ${theme.colors.secondary};
    }
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Nav>
        <Logo>GymCoach</Logo>
        <NavList>
          <NavItem>
            <Link to="/">Главная</Link>
          </NavItem>
          <NavItem>
            <Link to="/programs">Программы</Link>
          </NavItem>
          <NavItem>
            <Link to="/tips">Советы</Link>
          </NavItem>
          <NavItem>
            <Link to="/shop">Магазин</Link>
          </NavItem>
          <NavItem>
            <Link to="/coaches">Тренеры</Link>
          </NavItem>
          <NavItem>
            <Link to="/register">Регистрация</Link> {/* Новая ссылка */}
          </NavItem>
        </NavList>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;