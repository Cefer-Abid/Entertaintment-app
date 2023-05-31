import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body {
  background: #10141e;  
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  color: #FFFFFF;
}

.hidden{
  display:none;
}
`;
