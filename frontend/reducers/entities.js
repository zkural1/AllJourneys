import { combineReducers } from "redux";
import trailsReducer from "./trails";
import parksReducer from "./parks_reducer";

const entitiesReducer = combineReducers({
  parks: parksReducer,
  trails: trailsReducer,
});

export default entitiesReducer;
