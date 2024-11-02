import styled from 'styled-components';
import { Button, Form, Input, Label, TextField } from 'react-aria-components';
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

export const SearchForm = styled(Form)`
  padding: 8px 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const TextWrapper = styled(TextField)`
  flex-grow: 1;

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
  border: 2px solid black;
  background-color: white;
`;

export const SearchButton = styled(Button)`
  height: 100%;
  border-radius: 0;
  padding: 0.875rem;
  border: 2px solid black;
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
`;
