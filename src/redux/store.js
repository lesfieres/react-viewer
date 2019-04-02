import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const initialState = {};

const middleware = [thunk];

export default function makeStore() {
  return createStore(reducers, initialState, applyMiddleware(...middleware));
}
