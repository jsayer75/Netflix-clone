import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './store/reducers';
import promise from 'redux-promise';
import '@babel/polyfill';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './containers/App';
import 'swiper/swiper-bundle.min.css';
// Import main sass file to apply global styles
import './static/sass/style.scss';
const createStoreWithMiddleware = (function () {
  let initialState = {};

  try {
    initialState = localStorage.getItem('netflix')
      ? JSON.parse(localStorage.getItem('netflix'))
      : {};
  } catch (error) {
    console.log('getError', error);
  }

  const saver = (store) => (next) => (action) => {
    next(action);
    let stateToSave = store.getState();
    localStorage.setItem('netflix', JSON.stringify({ ...stateToSave }));
  };

  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(promise, saver))
  );
})();

const app = (
  <Provider store={createStoreWithMiddleware}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
