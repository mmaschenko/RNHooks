// const combineReducers = reducers => (state, action) => {
//   let hasChanged
//   const nextState = Object.keys(reducers).reduce((result, key) => {
//     console.log('nextState', reducers);
//     result[key] = reducers[key](state[key], action)
//     hasChanged = hasChanged || result[key] !== state[key]
//     console.log('result', result);
//     return result
//   }, {})
//   return hasChanged ? nextState : state
// }

// import { createStore, combineReducers, Reducer } from "redux";

// const combineReducers = reducer => {
//   return (state = {}, action) => {
//     const keys = Object.keys(reducer);
//     console.log('keys', keys);
//     const nextReducers = {};
//     for (let i = 0; i < keys.length; i++) {
//       console.log('reducer[keys[i]]', reducer[keys[i]]);
//       const invoke = reducer[keys[i]](state[keys[i]], action);
//       console.log('invoke', invoke);
//       nextReducers[keys[i]] = invoke;
//     }
//     console.log('nextReducers', nextReducers);
//     return nextReducers;
//   };
// };

// const combineReducers = reducer => {
//   return (state = {}, action) => {
//     const keys = Object.keys(reducer);
//     const nextReducers = {};
//     for (let i = 0; i < keys.length; i++) {
//       const invoke = reducer[keys[i]](state[keys[i]], action);
//       nextReducers[keys[i]] = invoke;
//     }
//     return nextReducers;
//   };
// };

export function combineReducers(reducers) {
  return (state, action) => {
    // Ensure the root state object is a new object; otherwise
    // React may not re-render.
    // let newState = { ...rootReducer(state, action) };
    const newState = {};
    Object.keys(reducers).forEach(domain => {
      let obj = state ? state[domain] : undefined;
      console.log('obj', obj);
      newState[domain] = reducers[domain](obj, action) || obj;
    });
    console.log('newState', newState);
    return newState;
  };
}

const combineStores = stores => {
  const storesArray = Object.entries(stores)
  const rootInitialState = {}
  const reducers = {}
  for (const [key, store] of storesArray) {
    rootInitialState[key] = store.initialState
    reducers[key] = store.reducer
  }
  console.log('reducers1 ', reducers);
  const rootReducer = combineReducers(reducers)
  return { rootReducer, rootInitialState }
}

export default combineStores