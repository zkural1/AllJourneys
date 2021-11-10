import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import searchReducer from './search_reducer'

const RootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  search: searchReducer
});

export default RootReducer