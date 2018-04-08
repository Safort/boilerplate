import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers';
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

renderApp();

if (module['hot']) {
  module['hot'].accept();
}