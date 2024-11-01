import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Atkinson Hyperlegible', sans-serif;
  }
`;

export const breakpoints = {
  xs: `max-width: 480px`,
  sm: `max-width: 768px`,
  md: `max-width: 992px`,
  lg: `max-width: 1216px`,
  xl: `max-width: 1408px`,
} as const;

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
