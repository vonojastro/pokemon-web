import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  GET_POKEMON_FAILED,
  GET_POKEMON_FETCH,
  GET_POKEMON_SUCCESS,
} from "../constants/getPokemonConstant";

function pokemonQueryApi(argument) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${argument}`).then(
    (response) => response.json()
  );
}

function* pokemonQuery(action) {
  try {
    const { argument } = action.payload;
    const response = yield call(pokemonQueryApi, argument);
    yield put({ type: GET_POKEMON_SUCCESS, response });
  } catch (error ) {
    yield put({ type: GET_POKEMON_FAILED, message: error.message});
  }
}

function* pokemonSaga() {
  yield takeEvery(GET_POKEMON_FETCH, pokemonQuery);
}

export default pokemonSaga;
