import styled from 'styled-components';
import { Input, Label, TextField } from 'react-aria-components';
import { breakpoints, FullBleed, FullBleedWrapper } from '../../globalStyles';

export const MainContainer = styled.main`
  ${FullBleedWrapper}/* @media(${breakpoints.md}) {
    > * {
      padding: 0 16px;
    }
  } */
`;

export const Header = styled.header`
  ${FullBleed}

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: black;
  color: white;
  padding: 16px;
  font-weight: 700;
  font-style: normal;
`;

export const TextWrapper = styled(TextField)`
  margin: 8px 0;

  @media (${breakpoints.md}) {
    padding: 0 16px;
  }
`;

export const SearchLabel = styled(Label)`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export const Search = styled(Input)`
  width: 100%;
  padding: 0.875rem 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid black;
  background-color: white;
`;
