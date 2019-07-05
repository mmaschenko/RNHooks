import React, { createContext, useReducer, useEffect} from 'react';
import { actionsCombiner } from './actions';
import { rootInitialState, rootReducer} from './reducers';



const StoreContext = createContext(rootInitialState);

const StoreProvider = ({ children }) => {
  // Get state and dispatch from Reacts new API useReducer. 
  const [state, dispatch] = useReducer(rootReducer, rootInitialState);
  // Get actions from useActions and pass it to Context
  const actions = actionsCombiner(state, dispatch);
  // Log new state
  useEffect(() => console.log({ newState: state }));
  // Render state, dispatch and special case actions
  return (
    <StoreContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };