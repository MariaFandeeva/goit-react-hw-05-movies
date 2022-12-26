import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
export const LoadButton = styled.button`
  padding: 2px 10px 6px 10px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  width: 120px;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
