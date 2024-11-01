import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from 'react-aria-components';

import { User } from '../../types';
import Spinner from '../Spinner';

type UsersTableProps = {
  users: User[] | undefined;
  isLoading: boolean;
};

const UsersTable = ({ users, isLoading }: UsersTableProps) => {
  if (!users || isLoading) {
    return <Spinner />;
  }

  return (
    <Table aria-label="Usuários">
      <TableHeader>
        <Column isRowHeader>Nome</Column>
        <Column isRowHeader>Telefone</Column>
        <Column isRowHeader>E-mail</Column>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <Row key={user.id}>
            <Cell>{user.name}</Cell>
            <Cell>{user.phone}</Cell>
            <Cell>{user.email}</Cell>
          </Row>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
