import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
ul {
    list-style: none;
    padding-left: 0px;
}

p {
    margin: 0;
    margin-bottom: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
  border: none;
  font-family: inherit;
}
body {
    height: 100%;
    background-color: #1D1D1D;
    color: #fff;
   display: flex;
   flex-direction: column;
    min-height: 100vh;
}
main {
   padding-bottom: 50px;

}

#root {
  height: calc(100vh-34px);
}
`;
