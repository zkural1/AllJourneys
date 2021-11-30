import { RECEIVE_TRAIL } from "../actions/trail";

const trailsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = { ...state };
  switch (action.type) {
    case RECEIVE_TRAIL:
      newState = action.payload;
      return newState;

    default:
      return state;
  }
};

export default trailsReducer;
