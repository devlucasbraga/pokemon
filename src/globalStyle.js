import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  li {
    list-style: none;
  }
  a{
    text-decoration: none;
    color: initial;
  }

`;

export default globalStyle;
