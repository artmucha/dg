import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-size: 16px;
    font-family: 'Kumbh Sans', sans-serif;
    color: #ffffff;
    background-color: #121212;
  }

  h1 {
    color: #b621fe;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
