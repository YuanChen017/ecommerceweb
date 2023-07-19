import { TOTAL_VALUE } from "../helper";
export const totalreducer = (state = 0, { type, payload }) => {
  switch (type) {
    case TOTAL_VALUE:
      return payload;
    default:
      return state;
  }
};
