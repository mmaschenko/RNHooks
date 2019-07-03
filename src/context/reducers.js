import types from "./types";

const initialState = {
  techList: ["TypeScript", "React Hooks"]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TECH_LIST:
      return {
        ...state,
        techList: action.payload
      };
    case types.ADD_TO_TECH_LIST:
      return {
        ...state,
        techList: [...state.techList, action.payload]
      };
    case types.REMOVE_FROM_TECH_LIST:
      return {
        ...state,
        techList: state.techList.filter(
          tech => tech !== action.payload)
      };
    default:
      throw new Error("Unexpected action");
  }
};
export { initialState, types, reducer };