import { Controller } from 'react-hook-form';
import UsersTable from '../../components/Table';

import useSearch from '../../hooks/useSearch';

import * as S from './styles';

export default function HomePage() {
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
        <UsersTable users={data} isLoading={isFetching} />
      </S.MainContainer>
    </>
  );
}
