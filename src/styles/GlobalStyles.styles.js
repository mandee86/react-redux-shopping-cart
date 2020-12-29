import { createGlobalStyle } from 'styled-components';
import { Colors } from './Theme.styles'

export const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
    font-size: 16px;
  }

  body {
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
    font-family: 'Catamaran', sans-serif;
    font-size: 1rem;
    line-height: 1.4;
    color: black;
  }

  * {
    box-sizing: border-box;
  }

  .grid-container {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  header, footer {
    background-color: ${Colors['dark-blue']};
    color: ${Colors['white']};
    padding: 10px 20px;
    a {
      color: inherit;
      text-decoration: none;
    }
  }

  main {
    padding: 20px;
    flex: 1;
  }

  footer {
    text-align: center;
  }

  a {
    &:hover {
      color: ${Colors['orange']}
    }
  }
`;