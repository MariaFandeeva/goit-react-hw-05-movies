import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.nav`
  margin-left: 100px;
  font-size: 20px;
`;
export const StyledLink = styled(NavLink)`
  padding: 2px 10px 6px 10px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  border: none;

  /* &:not(: last-of-type) { */
  margin-right: 10px;
  /* } */

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
