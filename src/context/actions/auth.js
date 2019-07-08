// import axios from 'axios'

// export function fetchStocks(params = {}, dispatch) {
//   dispatch({ type: types.STOCKS_REQUEST })
//   try {
//     const response = await axios.get(`some/url/for/fetching/stocks?query=${params.query}`)
//     if (response.data) {
//       dispatch({ type: AUTH.STOCKS_SUCCESS, payload: response.data })
//     } else {
//       throw new Error(response)
//     }
//   } catch (e) {
//     dispatch({ type: AUTH.STOCKS_ERROR, payload: e.message || 'Oops, there was an error!' })
//   }
// }


import { AUTH, MAIN } from "../types";
export const authActions = (state, dispatch) => {
  const { auth } = state;

  function loginUser({ username, password }) {
    dispatch({ type: AUTH.LOGIN_SHOW_LOADER, data: true });
    if (username && password) {
      
      setTimeout(() => {
        dispatch({ type: AUTH.LOGIN_SUCCESS });

      }, 3000)
    } else {
      dispatch({ type: AUTH.LOGIN_SUCCESS });
    }
  }
  return {
    loginUser
  };
};