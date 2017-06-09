import { merge } from 'lodash/fp';
import { handleActions } from 'redux-actions';
import { receiveEntities } from './actions';

const defaultState = {};

const reducer = handleActions({
  [receiveEntities]: (state, action) => merge(action.payload, state),
}, defaultState);

export default reducer;
