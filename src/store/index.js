import { createStore, combineReducers } from "redux";
import { productreducer } from "../reducer/productreducer";
import { statereducer } from "../reducer/statereducer";
import { totalreducer } from "../reducer/totalreducer";
export const store = createStore(
  combineReducers({
    states: statereducer,
    product: productreducer,
    total: totalreducer,
  })
);
