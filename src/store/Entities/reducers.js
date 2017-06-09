import { handleActions } from 'redux-actions';
import { receiveEntities } from './actions';

const defaultState = {};

const reducer = handleActions({
  [receiveEntities]: (state, action) => {
    return merge(action.payload, state);
  },
}, defaultState);

export default reducer;
