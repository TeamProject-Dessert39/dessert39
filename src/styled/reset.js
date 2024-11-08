import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyle = createGlobalStyle`
  ${reset}
  /* font */
  /* 
  font-family: 'Noto Sans KR', sans-serif;  
  font-family: "Lexend Deca", sans-serif;
  */
  /* color */
  :root {
    
  }
  /* 공통 */
  .inner{
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
  }
  /* other styles */
  body {
    font-size: 16px;
    font-weight: normal;
    line-height: 1.6;
    font-family: 'Noto Sans KR', sans-serif;  
    color: #1c1c1c;
  }
  a {
    text-decoration: none;
    color: #1c1c1c;
  }
  li {
    list-style: none;
  }
  img{
    vertical-align: top;
  }
  table {
    width: 100%;
  }
`;
export default GlobalStyle;
