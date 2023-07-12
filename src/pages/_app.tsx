import "../styles/globals.css";
import { ReactElement, ComponentType } from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import pokemonReducer from "../redux/reducer/getPokemonReducer";
import pokemonsReducer from "../redux/reducer/getAllPokemonReducer";
import pokemonSaga from "@/redux/saga/getPokemonSaga";
import pokemonsSaga from "@/redux/saga/getAllPokemonSaga";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ pokemonReducer, pokemonsReducer });

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(pokemonSaga);
sagaMiddleware.run(pokemonsSaga);

type PageProps = any;

type AppComponentProps = {
  Component: ComponentType<PageProps>;
  pageProps: PageProps;
};

export default function App({
  Component,
  pageProps,
}: AppComponentProps): ReactElement {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
