import { RECEIVE_PARK } from "../actions/park_actions";

// eslint-disable-next-line default-param-last
const parksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = { ...state };
  switch (action.type) {
    case RECEIVE_PARK:
      newState = { [action.payload.id]: action.payload };
      return newState;
    default:
      return state;
  }
};

export default parksReducer;
