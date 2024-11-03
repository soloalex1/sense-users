import styled from 'styled-components';
import { GridList } from 'react-aria-components';

export const UserListGrid = styled(GridList)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;
