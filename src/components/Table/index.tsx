import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from 'react-aria-components';

import Spinner from '../Spinner';

import { User } from '../../types';

import * as S from './styles';

type UsersTableProps = {
  users: User[] | undefined;
  isLoading: boolean;
};

const UsersTable = ({ users, isLoading }: UsersTableProps) => {
  if (!users || isLoading) {
    return <Spinner />;
  }

  return (
    <S.Table aria-label="Usuários">
      <S.TableHeader>
        <Column isRowHeader>Nome</Column>
        <Column isRowHeader>Telefone</Column>
        <Column isRowHeader>E-mail</Column>
      </S.TableHeader>
      <TableBody>
        {users.map((user) => (
          <Row key={user.id}>
            <S.TableCell>{user.name}</S.TableCell>
            <S.TableCell>{user.phone}</S.TableCell>
            <S.TableCell>{user.email}</S.TableCell>
          </Row>
        ))}
      </TableBody>
    </S.Table>
  );
};

export default UsersTable;
