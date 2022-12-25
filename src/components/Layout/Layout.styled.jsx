import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 1280px;
  font-size: 24px;
`;

export const LogoLink = styled(Link)`
  display: flex;
  text-decoration: none;
`;

export const SiteName = styled.p`
  margin-left: 10px;
  color: #ff0000;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const NavList = styled.nav`
  margin-left: 100px;
  font-size: 20px;
`;

export const StyledLink = styled(NavLink)`
  padding: 2px 10px 6px 10px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  border: none;

  &:not(: last-of-type) {
    margin-right: 10px;
  }

  &.active {
    background-color: #fff;
    color: #000;

    &:hover,
    &:focus {
      background-color: #fff;
    }
  }

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;

  &::before {
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const FooterText = styled.p`
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;
  font-size: 16px;
`;
export const MyLink = styled(Link)`
  /* text-decoration: none; */
  color: inherit;
  margin-left: 3px;
  margin-right: 3px;
`;
