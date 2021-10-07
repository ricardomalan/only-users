import React from 'react';
import ReactDOM from 'react-dom';
import ResetCSS from './styles/ResetCSSStyles';
import { Provider } from 'react-redux';
import store from './redux/store.js';

import Routes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ResetCSS />
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
