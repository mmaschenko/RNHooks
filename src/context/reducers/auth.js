import { AUTH } from "../types";

export const initialState = {
  // techList: ["TypeScript", "React Hooks"]
  showLoader: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        showLoader: false
      };
    case AUTH.LOGIN_SHOW_LOADER:
      return {
        ...state,
        showLoader: action.data
      };
  }
};