import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './calculator';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './store';

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Calculator />
  </Provider>,
  root
);
registerServiceWorker();
