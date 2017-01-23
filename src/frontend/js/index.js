import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/index.jsx';
import configureStore from './store/configureStore';


const store = configureStore();

const renderApp = (Component = App) => {
  render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.querySelector('.root'),
  );
};


if (module.hot) {
  module.hot.accept('./reducers/index.js', () => {
    const NextReducer = require('./reducers/index.js').default;

    store.replaceReducer(NextReducer);
  });

  module.hot.accept('./containers/index.jsx', () => renderApp());
}
renderApp();

