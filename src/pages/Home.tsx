import { useGetUsersQuery } from '../api';

export default function HomePage() {
  const { data, isLoading, isError } = useGetUsersQuery();

  return (
    <div>
      {data?.map((user) => (
        <span key={user.id}>{user.name}</span>
      ))}
    </div>
  );
}
