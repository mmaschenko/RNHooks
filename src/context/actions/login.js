import { AUTH } from '../types';
import axios from 'axios'

export function fetchStocks(params = {}, dispatch) {
  dispatch({ type: types.STOCKS_REQUEST })
  try {
    const response = await axios.get(`some/url/for/fetching/stocks?query=${params.query}`)
    if (response.data) {
      dispatch({ type: AUTH.STOCKS_SUCCESS, payload: response.data })
    } else {
      throw new Error(response)
    }
  } catch (e) {
    dispatch({ type: AUTH.STOCKS_ERROR, payload: e.message || 'Oops, there was an error!' })
  }
}


import { AUTH, MAIN } from "../types";
export const useActions = (state, dispatch) => {
  const { main } = state;
  function addTechIfNotInList(newTech) {
    const techIndex = main.techList.indexOf(newTech);
    if (techIndex !== -1) {
      alert("Tech is defined in list");
    } else {
      dispatch({ type: MAIN.ADD_TO_TECH_LIST, payload: newTech });
    }
  }

  function loginUser({ username, password }) {
    dispatch({ type: AUTH.LOGIN_SHOW_LOADER });
    if (username && password) {
      dispatch({ type: AUTH.LOGIN_SUCCESS });
      setTimeout(() => {

      }, 3000)
    } else {
      dispatch({ type: AUTH.LOGIN_SUCCESS });
    }
  }
  return {
    addTechIfNotInList
  };
};