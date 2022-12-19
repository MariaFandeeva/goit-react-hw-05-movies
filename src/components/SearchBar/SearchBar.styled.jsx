import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

export const Input = styled.input`
  width: 530px;
  height: 40px;
  padding: 0 20px;
  background-color: hsl(0, 0%, 7%);
  color: hsla(0, 100%, 100%, 0.88);
  font-size: 16px;
  border-radius: 40px 0 0 40px;
  border: 1px solid hsl(0, 0%, 18.82%);
  box-shadow: inset 0 1px 2px hsla(0, 0%, 0%, 0);

  &:hover,
  &:focus {
    border: 1px solid rgba(255, 255, 255, 0.2);
    outline-style: none;
  }
`;

export const Button = styled.button`
  height: 40px;
  padding: 0 20px;
  background-color: hsla(0, 0%, 100%, 0.08);
  color: #fff;
  font-size: 16px;
  border-radius: 0 40px 40px 0;
  border: 1px solid hsl(0, 0%, 18.82%);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;
