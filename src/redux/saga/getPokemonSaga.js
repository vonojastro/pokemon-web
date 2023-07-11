import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  GET_POKEMON_FAILED,
  GET_POKEMON_FETCH,
  GET_POKEMON_SUCCESS,
} from "../actions/getPokemonActions";

function pokemonQueryApi(argument) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${argument}`).then(
    (response) => response.json()
  );
}

function* pokemonQuery(action) {
  const { argument } = action.payload;
  try {
    const response = yield call(pokemonQueryApi, argument);
    yield put({ type: GET_POKEMON_SUCCESS, response });
  } catch (error) {
    yield put({ type: GET_POKEMON_FAILED, message: error.message });
  }
}

function* mySaga() {
  yield takeEvery(GET_POKEMON_FETCH, pokemonQuery);
}

export default mySaga;
