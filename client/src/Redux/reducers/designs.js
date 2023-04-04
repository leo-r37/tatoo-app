import { GET_DESIGNS, GET_DESIGN } from "../actions";

const initialState = {
  designs: [],
  current: {},
};

const designsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DESIGNS:
      return {
        ...state,
        designs: action.payload,
      };
    case GET_DESIGN:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return { ...state };
  }
};

export default designsReducer;
