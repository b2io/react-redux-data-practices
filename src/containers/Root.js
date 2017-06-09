import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from '../components/App';

function Root({ store }) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Root;
