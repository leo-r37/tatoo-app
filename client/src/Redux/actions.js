import axios from "axios";

export const GET_DESIGNS = "GET_DESIGNS";
export const GET_DESIGN = "GET_DESIGN";

export const getDesigns = () => {
  return async (dispatch) => {
    const designs = await axios.get("http://192.168.1.10:3001/designs");
    return dispatch({ type: GET_DESIGNS, payload: designs.data });
  };
};

export const getDesign = (id) => {
  return async (dispatch) => {
    const design = await axios.get(`http://192.168.1.10:3001/designs/${id}`);
    return dispatch({ type: GET_DESIGN, payload: design.data });
  };
};
