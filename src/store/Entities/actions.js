import { get } from 'lodash';
import { createAction } from 'redux-actions';

// eslint-disable-next-line import/prefer-default-export
export const receiveEntities = createAction(
  'b2io/redux-todo/Entities/receive',
  entities => get(entities, 'entities', entities),
);
