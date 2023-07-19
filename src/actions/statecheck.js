import {
  CHECK_USER_IS_LOGIN,
  CHECK_IS_LOGIN,
  CHECK_IS_SIGNUP,
  CHECK_IS_RESET,
  CHECK_IS_EMAIL,
  CHECK_IS_PRODUCT,
  CHECK_IS_ADDPRODUCT,
  CHECK_IS_DETAIL,
  CHECK_CART,
  CHECK_ADDQTY,
  CHECK_ADMIR_ACC,
  CHECK_ERROR,
} from "../helper";
export const checkerror = (dispatch) => (value) => {
  dispatch({
    type: CHECK_ERROR,
    payload: value,
  });
};
export const checkadmir = (dispatch) => (value) => {
  dispatch({
    type: CHECK_ADMIR_ACC,
    payload: value,
  });
};
export const checkqty = (dispatch) => (value) => {
  dispatch({
    type: CHECK_ADDQTY,
    payload: value,
  });
};
export const checkcart = (dispatch) => (value) => {
  dispatch({
    type: CHECK_CART,
    payload: value,
  });
};
export const checkUser = (dispatch) => (value) => {
  dispatch({
    type: CHECK_USER_IS_LOGIN,
    payload: value,
  });
};
export const checkdetail = (dispatch) => (value) => {
  dispatch({
    type: CHECK_IS_DETAIL,
    payload: value,
  });
};
export const checklogin = (dispatch) => (value) => {
  dispatch({
    type: CHECK_IS_LOGIN,
    payload: value,
  });
};
export const checksign = (dispatch) => (value) => {
  dispatch({
    type: CHECK_IS_SIGNUP,
    payload: value,
  });
};
export const checkPwreset = (dispatch) => (value) => {
  dispatch({
    type: CHECK_IS_RESET,
    payload: value,
  });
};
export const checkemail = (dispatch) => (value) => {
  dispatch({
    type: CHECK_IS_EMAIL,
    payload: value,
  });
};
export const checkproduct = (dispatch) => (value) => {
  dispatch({
    type: CHECK_IS_PRODUCT,
    payload: value,
  });
};
export const checkaddproduct = (dispatch) => (value) => {
  dispatch({
    type: CHECK_IS_ADDPRODUCT,
    payload: value,
  });
};
