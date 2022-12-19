import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  margin: 0px auto;
  padding: 0px;
  list-style: none;
`;

export const Item = styled.li`
  margin-bottom: 30px;

  &:nth-last-child(-n + 2) {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 20px;
  text-transform: uppercase;
`;

export const LinkTitle = styled(Link)`
  text-decoration: none;
  color: #fff;

  &:hover,
  &:focus {
    color: #aaa;
  }
`;

export const Img = styled.img`
  width: 340px;
  height: 476px;
`;

export const MovieTitle = styled.p`
  max-width: 340px;
  margin-top: 10px;
  font-size: 20px;
`;
