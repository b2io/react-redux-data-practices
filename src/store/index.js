import { applyMiddleware, createStore as _createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

function createStore() {
  const store = _createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default createStore;
