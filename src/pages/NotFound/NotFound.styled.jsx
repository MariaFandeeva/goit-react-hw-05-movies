import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1280px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: #ff0000;
  font-size: 50px;
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
`;

export const ToMainLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 8px 10px 8px 10px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  border-radius: 8px;
  border: none;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
