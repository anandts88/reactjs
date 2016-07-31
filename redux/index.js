import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import helloReducer from './reducers';
import App from './components/app';

const {
  render
} = ReactDom;

const store = createStore(helloReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
