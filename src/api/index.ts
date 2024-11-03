import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../types';

export const api = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['USER', 'DETAILS'],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], string>({
      query: (name) => {
        const params: { [key: string]: string } = {};
        if (name) params.name = name;

        return {
          url: '/users',
          params,
        };
      },
      providesTags: ['USER'],
    }),
    getUserDetails: builder.query<User, number>({
      query: (id) => ({ url: '/users', params: { id } }),
      providesTags: ['DETAILS'],
    }),
  }),
});

export const { useLazyGetUsersQuery, useGetUserDetailsQuery } = api;
