import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<any, string>({
      query: () => 'api/post',
    }),
  }),
})


export const { useGetPokemonByNameQuery } = pokemonApi