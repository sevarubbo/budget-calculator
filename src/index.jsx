import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import TotalSpendContainer from './components/TotalSpend/Container';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <TotalSpendContainer/>
    </div>
  </Provider>,
  document.getElementById('root')
);
