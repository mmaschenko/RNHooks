import { MAIN } from "../types";

export const initialState = {
  techList: ["TypeScript", "React Hooks"]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAIN.SET_TECH_LIST:
      return {
        ...state,
        techList: action.payload
      };
    case MAIN.ADD_TO_TECH_LIST:
      return {
        ...state,
        techList: [...state.techList, action.payload]
      };
    case MAIN.REMOVE_FROM_TECH_LIST:
      return {
        ...state,
        techList: state.techList.filter(
          tech => tech !== action.payload)
      };
    // default:
    //   throw new Error("Unexpected action");
  }
};