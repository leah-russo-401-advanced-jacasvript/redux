import { createStore, combineReducers } from 'redux';
import products from './products.js';

import category from './categories.js';

const reducers = combineReducers({
  category,
  products
})

const store= () => {
  return createStore(reducers);
}

export default store;