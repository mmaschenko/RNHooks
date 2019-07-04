const combineReducers = reducers => (state, action) => {
  let hasChanged
  const nextState = Object.keys(reducers).reduce((result, key) => {
    result[key] = reducers[key](state[key], action)
    hasChanged = hasChanged || result[key] !== state[key]
    return result
  }, {})
  return hasChanged ? nextState : state
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