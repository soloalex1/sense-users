import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { TableCellsIcon, QueueListIcon } from '@heroicons/react/24/outline';

import UsersTable from '../../components/Table';
import UserList from '../../components/UserList';

import useSearch from '../../hooks/useSearch';

import * as S from './styles';

export default function HomePage() {
  const [view, setView] = useState<string>('list');

  const { data, control, onSubmit, isFetching } = useSearch();

  return (
    <>
      <S.Header>
        <h1>Lista de usuários</h1>
      </S.Header>
      <S.MainContainer>
        <S.SearchForm onSubmit={onSubmit}>
          <Controller
            name="search"
            control={control}
            render={({ field }) => (
              <S.TextWrapper>
                <S.SearchLabel htmlFor="search">
                  Pesquisa de usuários
                </S.SearchLabel>
                <S.Search
                  type="search"
                  placeholder="Pesquise usuários pelo nome"
                  id="search"
                  {...field}
                />
              </S.TextWrapper>
            )}
          />
          <S.SearchButton type="submit">Pesquisar</S.SearchButton>
        </S.SearchForm>

        <S.ToggleGroup
          value={view}
          onChange={setView}
          aria-label="Alterar visualização"
        >
          <S.Toggle value="table">
            <TableCellsIcon title="Tabela" />
          </S.Toggle>
          <S.Toggle value="list">
            <QueueListIcon title="Lista" />
          </S.Toggle>
        </S.ToggleGroup>

        {view === 'table' && <UsersTable users={data} isLoading={isFetching} />}
        {view === 'list' && <UserList users={data} />}
      </S.MainContainer>
    </>
  );
}
