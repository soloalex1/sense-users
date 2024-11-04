import styled from 'styled-components';
import {
  Cell,
  TableHeader as DefaultTableHeader,
  Table as DefaultTable,
} from 'react-aria-components';

import { breakpoints } from '../../globalStyles';

export const Table = styled(DefaultTable)`
  border-collapse: collapse;

  @media (${breakpoints.md}) {
    margin: 0 16px;
  }
`;

export const TableHeader = styled(DefaultTableHeader)`
  background-color: #000;
  color: #fff;

  th {
    padding: 14px 8px;
    font-size: 1.25rem;
    text-align: left;
    border: 2px solid black;
  }
`;

export const TableCell = styled(Cell)`
  padding: 0.875rem 0.5rem;
  border: 2px solid black;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
