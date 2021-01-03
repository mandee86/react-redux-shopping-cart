import { css } from 'styled-components';
import { Colors } from './theme/Theme.styles'

export const Base = css`
  html, body, #root {
    height: 100%;
    font-size: 16px;
  }

  body {
    background-color: ${Colors['gray']};
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

  .content {
    display: flex;
    flex-wrap: nowrap;
  }

  .main {
    flex: 3;
  }

  .sidebar {
    flex: 1;
  }
`;