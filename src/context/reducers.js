import types from "./types";

import combineStores from './reducers/combineStores'
import * as main from './reducers/main';
import * as auth from './reducers/auth';

const combinedStore = combineStores({
  main,
  auth
})

const { rootInitialState, rootReducer } = combinedStore;

export { rootInitialState, types, rootReducer }