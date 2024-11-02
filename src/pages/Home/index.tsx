import { useState } from 'react';

import { useGetUsersQuery } from '../../api';
import useDebounce from '../../hooks/useDebounce';

import UsersTable from '../../components/Table';

import * as S from './styles';

export default function HomePage() {
  const [search, setSearch] = useState<string>('');
  const debouncedSearch = useDebounce(search);

  const { data, isLoading, isError } = useGetUsersQuery(debouncedSearch);

  return (
    <>
      <S.Header>
        <h1>Lista de usuários</h1>
      </S.Header>
      <S.MainContainer>
        <S.TextWrapper>
          <S.SearchLabel htmlFor="search">Pesquisa de usuários</S.SearchLabel>
          <S.Search
            id="search"
            type="search"
            name="search"
            placeholder="Pesquise usuários pelo nome"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </S.TextWrapper>
        <UsersTable users={data} isLoading={isLoading} />
      </S.MainContainer>
    </>
  );
}
