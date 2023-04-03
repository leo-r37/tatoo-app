import { GET_DESIGNS } from "../actions";

const initialState = {
  designs: [],
};

const designsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DESIGNS:
      return {
        ...state,
        designs: action.payload,
      };
    default:
      return { ...state };
  }
};

export default designsReducer;
