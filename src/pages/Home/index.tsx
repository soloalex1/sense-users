import { Suspense, useState } from 'react';
import { TextField, Label, Input } from 'react-aria-components';

import { useGetUsersQuery } from '../../api';
import useDebounce from '../../hooks/useDebounce';

import * as S from './styles';

export default function HomePage() {
  const [search, setSearch] = useState<string>('');

  const debouncedSearch = useDebounce(search);

  const { data, isLoading, isError } = useGetUsersQuery(debouncedSearch);

  return (
    <S.MainContainer>
      <S.Header>
        <h1>Lista de usuários</h1>
        <TextField>
          <S.SearchLabel htmlFor="search">Pesquisa de usuários</S.SearchLabel>
          <S.Search
            id="search"
            type="search"
            name="search"
            placeholder="Pesquise usuários por nome"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </TextField>
      </S.Header>

      <Suspense fallback={'Carregando...'}>
        <div>
          {data?.map((user) => (
            <span key={user.id}>{user.name}</span>
          ))}
        </div>
      </Suspense>
    </S.MainContainer>
  );
}
