import { AUTH } from "../types";

export const initialState = {
  // techList: ["TypeScript", "React Hooks"]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        techList: action.payload
      };
  }
};