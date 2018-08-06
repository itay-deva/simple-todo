import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers'
import './assets/styles/index.css';
import App from './components/App';
// import { loadState, saveState } from './localStorage-conf';
import request from 'superagent';
import mock from 'superagent-mock';
import mockConfig from '../../mock/config';

// initialize superagent-mock
mock(request, mockConfig);

const sagaMiddleware = createSagaMiddleware();

// const persistedState = loadState() // needs to move to reducer.
const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
)

// store.subscribe(() => { // needs to move reducer
//   saveState({
//      todos:store.getState().todos
//     });
// });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
