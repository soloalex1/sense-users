import styled from 'styled-components';
import {
  Button,
  Form,
  Input,
  Label,
  Radio,
  RadioGroup,
  TextField,
} from 'react-aria-components';

import { breakpoints, FullBleed, FullBleedWrapper } from '../../globalStyles';

export const MainContainer = styled.main`
  ${FullBleedWrapper}
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

  @media (${breakpoints.sm}) {
    padding: 8px 16px;
  }
`;

export const TextWrapper = styled(TextField)`
  flex-grow: 1;
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

export const ToggleGroup = styled(RadioGroup)`
  width: 100%;
  padding: 8px 0;

  display: flex;
  justify-content: flex-end;
  flex-flow: row nowrap;
  gap: 8px;

  @media (${breakpoints.sm}) {
    padding: 8px 16px;
  }
`;

export const Toggle = styled(Radio)`
  padding: 6px;
  background-color: #fff;
  border-radius: 0;
  color: #000;
  border: 2px solid #000;

  display: flex;
  align-items: center;

  &[data-selected] {
    background-color: #000;
    color: #fff;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;
