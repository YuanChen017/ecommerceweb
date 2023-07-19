import { TOTAL_VALUE } from "../helper";
export const returntotal = (dispatch) => (value) => {
  dispatch({
    type: TOTAL_VALUE,
    payload: value,
  });
};
