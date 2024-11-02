import { SubmitHandler, useForm } from 'react-hook-form';

import { useLazyGetUsersQuery } from '../api';
import { useEffect } from 'react';

type FormValues = {
  search: string;
};

const useSearch = () => {
  const currentSearch = localStorage.getItem('searchValue') ?? '';
  const [getUsers, { data, isLoading, isUninitialized }] =
    useLazyGetUsersQuery();

  const { register, handleSubmit } = useForm<FormValues>({
    mode: 'onSubmit',
    defaultValues: {
      search: currentSearch,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async ({ search }, event) => {
    event?.preventDefault();
    localStorage.setItem('searchValue', search);
    await getUsers(search);
  };

  useEffect(() => {
    if (isUninitialized) {
      handleSubmit(onSubmit)();
    }
  }, []);

  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    data,
    isLoading,
  };
};

export default useSearch;
