import UserCard from '../UserCard';
import Spinner from '../Spinner';

import * as S from './styles';

import { User } from '../../types';

type UserListProps = {
  users: User[] | undefined;
  isLoading: boolean;
};

const UserList = ({ users, isLoading }: UserListProps) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <S.UserListGrid aria-label="Lista de usuários" items={users}>
      {(item) => <UserCard user={item as User} />}
    </S.UserListGrid>
  );
};

export default UserList;
