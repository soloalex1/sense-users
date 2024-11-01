import { useState } from 'react';

import { useGetUsersQuery } from '../api';

import useDebounce from '../hooks/useDebounce';

export default function HomePage() {
  const [search, setSearch] = useState<string>('');

  const debouncedSearch = useDebounce(search);

  const { data, isLoading, isError } = useGetUsersQuery(debouncedSearch);

  return (
    <main>
      <h1>Lista de usuários</h1>

      <input
        type="search"
        name="search"
        placeholder="Pesquise usuários por nome"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {data?.map((user) => (
          <span key={user.id}>{user.name}</span>
        ))}
      </div>
    </main>
  );
}
