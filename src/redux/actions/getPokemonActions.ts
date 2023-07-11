export const GET_POKEMON_FETCH = 'GET_POKEMON_FETCH';
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';
export const GET_POKEMON_FAILED = 'GET_POKEMON_FAILED';

// userActions.ts
export const getUsersFetch = (payload: { argument: string }) => ({
  type: GET_POKEMON_FETCH,
  payload,
});
