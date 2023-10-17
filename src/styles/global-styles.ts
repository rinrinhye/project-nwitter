import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
${reset};

*{box-sizing:border-box}

a{color:inherit;
  text-decoration: none;
}

button{
  cursor: pointer;
  border:none;
  background-color: inherit;}
`;
