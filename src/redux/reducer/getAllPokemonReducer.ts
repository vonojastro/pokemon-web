import {
  GET_ALLPOKEMON_FAILED,
  GET_ALLPOKEMON_FETCH,
  GET_ALLPOKEMON_SUCCESS,
} from "../constants/getAllPokemonConstant";

const pokemonsReducer = (state = { pokemons: [] }, action: any) => {
  switch (action.type) {
    case GET_ALLPOKEMON_FETCH:
      return { ...state, loading: true, error: false };
    case GET_ALLPOKEMON_SUCCESS:
      return {
        ...state,
        pokemons: action.results,
        loading: false,
        error: false,
      };
    case GET_ALLPOKEMON_FAILED:
      return { ...state, message: [], loading: false, error: true };

    default:
      return state;
  }
};

export default pokemonsReducer;
