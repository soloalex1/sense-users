import { GridListItem } from 'react-aria-components';
import styled from 'styled-components';

export const CardContainer = styled(GridListItem)`
  border: 2px solid black;
  padding: 8px;

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 4px;
`;
