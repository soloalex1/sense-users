import styled from 'styled-components';
import { GridList } from 'react-aria-components';
import { breakpoints } from '../../globalStyles';

export const UserListGrid = styled(GridList)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  @media (${breakpoints.md}) {
    padding: 0 16px;
    grid-template-columns: 1fr;
  }
`;
