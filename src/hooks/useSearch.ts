import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useLazyGetUsersQuery } from '../api';

type FormValues = {
  search: string;
};

const useSearch = () => {
  const currentSearch = localStorage.getItem('searchValue') ?? '';
  const [getUsers, { data, isFetching, isUninitialized }] =
    useLazyGetUsersQuery();

  const { control, register, handleSubmit } = useForm<FormValues>({
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
    control,
    register,
    data,
    isFetching,
  };
};

export default useSearch;
