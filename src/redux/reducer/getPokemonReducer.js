import { GET_POKEMON_SUCCESS, GET_POKEMON_FETCH, GET_POKEMON_FAILED } from "../actions/getPokemonActions";

const pokemonReducer = (state = { pokemon: [] }, action) => {
  switch (action.type) {
    case GET_POKEMON_FETCH:
      return { ...state, loading: true, error: false };
    case GET_POKEMON_SUCCESS:
      return { ...state, pokemon: action.response, loading: false, error: false };
    case GET_POKEMON_FAILED:
      return { ...state, message: [], loading: false, error: true };

    default:
      return state;
  }
};

export default pokemonReducer;
