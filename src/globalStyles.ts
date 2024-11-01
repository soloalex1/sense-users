import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Atkinson Hyperlegible', sans-serif;
  }
`;

export const FullBleedWrapper = `
  display: grid;
  grid-template-columns: 1fr min(80ch, 100%) 1fr;

  > * {
    grid-column: 2;
  }
`;

export const FullBleed = `
  width: 100%;
  grid-column: 1 / 4;
`;

export default GlobalStyle;
