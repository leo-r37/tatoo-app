import axios from "axios";

export const GET_DESIGNS = "GET_DESIGNS";

export const getDesigns = () => {
  return async (dispatch) => {
    const designs = await axios.get("http://192.168.1.10:3001/designs");
    return dispatch({ type: GET_DESIGNS, payload: designs.data });
  };
};

// export const getIngredients = () => async (dispatch) => {
//     let response = await axios.get(`/ingredients`);
//     return dispatch({ type: GET_INGREDIENTS, payload: response.data });
    
//   };
