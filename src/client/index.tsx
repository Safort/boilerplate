import React from 'react';
import { render } from 'react-dom';
import App from './containers';

const renderApp = () => render(<App />, document.querySelector('.root'));

renderApp();
