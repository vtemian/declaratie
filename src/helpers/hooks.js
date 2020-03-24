import { useReducer } from "react";

export function useSetState(initialState) {
  return useReducer((prevState, state) => {
    return { ...prevState, ...state };
  }, initialState);
}
