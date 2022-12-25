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
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 8px 10px 8px 10px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const MovieItem = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const MovieImg = styled.img`
  width: 400px;
  height: 600px;
`;

export const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 80px 0 60px;
`;

export const MovieTitle = styled.h3`
  margin-bottom: 100px;
  color: #fff;
  font-size: 30px;
  text-transform: uppercase;
`;

export const MovieText = styled.p`
  margin-bottom: 20px;
  color: #fff;
  font-size: 16px;
`;

export const MoreDetails = styled.div`
  margin-top: 100px;
`;

export const MoreDetailsList = styled.ul`
  display: flex;
`;

export const MoreDetailsItem = styled.li`
  //   &:not(: last-of-type) {
  margin-right: 10px;
  //   }
  //
`;

export const MoreDetailsButton = styled(Link)`
  display: flex;
  align-items: center;
  padding: 8px 18px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
