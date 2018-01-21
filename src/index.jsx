import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

import App from './components/App/Component';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
