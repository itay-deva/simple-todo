import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './reducers'
import './assets/styles/index.css';
import App from './components/App';
import { loadState, saveState } from './localStorage-conf';

const persistedState = loadState()
const store = createStore(
  rootReducer,
  persistedState
)

store.subscribe(() => {
  saveState({
     todos:store.getState().todos
    });
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
