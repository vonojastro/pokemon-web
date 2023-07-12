import {
  GET_ALLPOKEMON_FAILED,
  GET_ALLPOKEMON_FETCH,
  GET_ALLPOKEMON_SUCCESS,
} from "../constants/getAllPokemonConstant";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

function pokemonApi() {
  return fetch("https://pokeapi.co/api/v2/pokemon/").then((response) =>
    response.json()
  );
}

function* allPokemonFetch(action) {
  try {
    const {results} = yield call(pokemonApi);

    yield put({ type: GET_ALLPOKEMON_SUCCESS, results });
  } catch (error) {
    yield put({ type: GET_ALLPOKEMON_FAILED, message: error.message });
  }
}

function* pokemonsSaga() {
  yield takeEvery(GET_ALLPOKEMON_FETCH, allPokemonFetch);
}

export default pokemonsSaga;
