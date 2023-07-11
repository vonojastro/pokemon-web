import "../styles/globals.css";
import { ReactElement, ComponentType } from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "../redux/saga/getPokemonSaga";
import pokemonReducer from "../redux/reducer/getPokemonReducer";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ pokemonReducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

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
