import { Column, Row, TableBody } from 'react-aria-components';

import Spinner from '../Spinner';

import { User } from '../../types';

import * as S from './styles';

type UsersTableProps = {
  users: User[] | undefined;
  isLoading: boolean;
};

const UsersTable = ({ users, isLoading }: UsersTableProps) => {
  if (isLoading) {
    return (
      <S.LoaderContainer>
        <Spinner />
      </S.LoaderContainer>
    );
  }

  return (
    <S.Table aria-label="Tabela de usuários">
      <S.TableHeader>
        <Column isRowHeader>Nome</Column>
        <Column isRowHeader>Telefone</Column>
        <Column isRowHeader>E-mail</Column>
      </S.TableHeader>
      <TableBody items={users}>
        {(user) => (
          <Row id={user.id}>
            <S.TableCell>{user.name}</S.TableCell>
            <S.TableCell>{user.phone}</S.TableCell>
            <S.TableCell>{user.email}</S.TableCell>
          </Row>
        )}
      </TableBody>
    </S.Table>
  );
};

export default UsersTable;
