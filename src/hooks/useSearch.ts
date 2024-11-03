import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useLazyGetUsersQuery } from '../api';

type FormValues = {
  search: string;
};

const useSearch = () => {
  const history = useHistory();
  const currentSearch = localStorage.getItem('searchValue') ?? '';

  const [getUsers, { data, isFetching, isUninitialized }] =
    useLazyGetUsersQuery();

  const { control, register, handleSubmit } = useForm<FormValues>({
    mode: 'onSubmit',
    defaultValues: {
      search: currentSearch,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async ({ search }) => {
    localStorage.setItem('searchValue', search);

    await getUsers(search);
  };

  useEffect(() => {
    if (isUninitialized) {
      handleSubmit(onSubmit)();
    }
  }, []);

  useEffect(() => {
    history.push({
      pathname: '/',
      search: currentSearch ? `?name=${currentSearch}` : '',
    });
  }, [currentSearch]);

  return {
    onSubmit: handleSubmit(onSubmit),
    control,
    register,
    data,
    isFetching,
  };
};

export default useSearch;
