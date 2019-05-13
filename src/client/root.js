import '@babel/polyfill';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import configureStore from './store/configureStore';

window.__INITIAL_STATE__ = window.__INITIAL_STATE__ || {};
const initialState = window.__INITIAL_STATE__;
delete window.__INITIAL_STATE__;

const store = configureStore(initialState);


ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
);