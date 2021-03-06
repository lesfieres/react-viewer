/* eslint-disable prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';

import { StoreContext } from 'redux-react-hook';
import makeStore from './redux/store';

import './index.css';
// eslint-disable-next-line no-unused-vars
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';

const store = makeStore();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// how to add airbnb coding style
// https://www.robinwieruch.de/react-eslint-webpack-babel/
