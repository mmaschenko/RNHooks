
export function combineReducers(reducers) {
  return (state, action) => {
    const newState = {};
    Object.keys(reducers).forEach(domain => {
      let obj = state ? state[domain] : undefined;
      newState[domain] = reducers[domain](obj, action) || obj;
    });
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
  const rootReducer = combineReducers(reducers)
  return { rootReducer, rootInitialState }
}

export default combineStores