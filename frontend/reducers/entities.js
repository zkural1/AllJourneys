import { combineReducers } from 'redux';
import trailsReducer from './trails';


const entitiesReducer = combineReducers({
    
  trails: trailsReducer
});

export default entitiesReducer