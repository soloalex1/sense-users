import UsersTable from '../../components/Table';

import useSearch from '../../hooks/useSearch';

import * as S from './styles';

export default function HomePage() {
  const { data, register, onSubmit, isLoading } = useSearch();

  return (
    <>
      <S.Header>
        <h1>Lista de usuários</h1>
      </S.Header>
      <S.MainContainer>
        <S.SearchForm onSubmit={onSubmit}>
          <S.TextWrapper>
            <S.SearchLabel htmlFor="search">Pesquisa de usuários</S.SearchLabel>
            <S.Search
              type="search"
              placeholder="Pesquise usuários pelo nome"
              id="search"
              {...register('search')}
            />
          </S.TextWrapper>
          <S.SearchButton type="submit">Pesquisar</S.SearchButton>
        </S.SearchForm>
        <UsersTable users={data} isLoading={isLoading} />
      </S.MainContainer>
    </>
  );
}
