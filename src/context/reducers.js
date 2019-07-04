import types from "./types";

// const initialState = {
//   techList: ["TypeScript", "React Hooks"]
// };

// import combineReducers from './reducers/combineReducers';
import combineStores from './reducers/combineStores'
import * as main from './reducers/main';
import * as auth from './reducers/auth';

// const reducer = combineReducers({
//   main,
//   auth
// });
const combinedStore = combineStores({
  main,
  auth
})

const { rootInitialState, rootReducer } = combinedStore;

export { rootInitialState, types, rootReducer }


// export { initialState, types, reducer };