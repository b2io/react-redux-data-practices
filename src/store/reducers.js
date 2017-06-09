import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';

import entities from './Entities/reducers';

const rootReducer = combineReducers({
  entities: reduceReducers(
    entities,
  ),
});

export default rootReducer;
