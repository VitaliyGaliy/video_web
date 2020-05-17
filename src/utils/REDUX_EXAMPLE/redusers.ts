import * as types from "./constants";

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case types.GET_LIST_OF_CAMERAS:
      return [...state, action.payload];

    default:
      return state;
  }
}
