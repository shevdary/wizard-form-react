import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './navigation';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
