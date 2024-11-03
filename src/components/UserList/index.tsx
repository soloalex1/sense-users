import UserCard from '../UserCard';

import * as S from './styles';

import { User } from '../../types';

type UserListProps = {
  users: User[] | undefined;
};

const UserList = ({ users }: UserListProps) => {
  return (
    <S.UserListGrid aria-label="Lista de usuários" items={users}>
      {(item) => <UserCard user={item as User} />}
    </S.UserListGrid>
  );
};

export default UserList;
