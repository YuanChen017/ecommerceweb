import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  ITEM_DETAIL,
  ADD_ONE,
  DELETE_ONE,
  OPEN_QTY_NUMBER,
  CHANGE_THE_QTY,
  CLOSE_QTY_NUMBER,
  OPEN_DETAIL,
  CLOSE_DETAIL,
} from "../helper";
export const trunoffdetail = (dispatch) => (index) => {
  dispatch({
    type: CLOSE_DETAIL,
    payload: index,
  });
};
export const trunondetail = (dispatch) => (index) => {
  dispatch({
    type: OPEN_DETAIL,
    payload: index,
  });
};
export const trunoffqty = (dispatch) => (index) => {
  dispatch({
    type: CLOSE_QTY_NUMBER,
    payload: index,
  });
};
export const trunonqty = (dispatch) => (index) => {
  dispatch({
    type: OPEN_QTY_NUMBER,
    payload: index,
  });
};
export const addone = (dispatch) => (index) => {
  dispatch({
    type: ADD_ONE,
    payload: index,
  });
};
export const deleteone = (dispatch) => (index) => {
  dispatch({
    type: DELETE_ONE,
    payload: index,
  });
};
export const addproduct = (dispatch) => (product) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: product,
  });
};
export const deleteproduct = (dispatch) => (index) => {
  dispatch({
    type: DELETE_PRODUCT,
    payload: index,
  });
};
export const itemdetail = (dispatch) => (index) => {
  dispatch({
    type: ITEM_DETAIL,
    payload: index,
  });
};
export const changeqty = (dispatch) => (index, value) => {
  dispatch({
    type: CHANGE_THE_QTY,
    payload: { index, value },
  });
};
