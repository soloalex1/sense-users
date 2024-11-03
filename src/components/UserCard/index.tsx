import { UserCircleIcon } from '@heroicons/react/24/outline';

import * as S from './styles';

import { User } from '../../types';

type UserCardProps = {
  user: User;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <S.CardContainer id={user.id}>
      <UserCircleIcon />
      <S.CardBody>
        <h2>{user.name}</h2>
        <p>{user.phone}</p>
        <p>{user.email}</p>
      </S.CardBody>
    </S.CardContainer>
  );
};

export default UserCard;
