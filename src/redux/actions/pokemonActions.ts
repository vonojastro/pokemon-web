import { GET_ALLPOKEMON_FETCH } from "../constants/getAllPokemonConstant";
import { GET_POKEMON_FETCH } from "../constants/getPokemonConstant";

// userActions.ts
export const getPokemonFetch = (payload: { argument: string }) => ({
  type: GET_POKEMON_FETCH,
  payload,
});

export const getAllPokemonFetch = (payload: any) => ({
  type: GET_ALLPOKEMON_FETCH,
  payload,
});
