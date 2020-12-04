import { createStore, combineReducers } from 'redux';
import products from './products.js';
import cart from './cart.js';

import category from './categories.js';

const reducers = combineReducers({
  category,
  products,
  cart
})

const store= () => {
  return createStore(reducers);
}

export default store;