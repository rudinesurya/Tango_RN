import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import catalogReducer from './reducers/catalogReducer';
import productReducer from './reducers/productReducer';

const reducers = combineReducers({
  catalog: catalogReducer,
  product: productReducer,
});

// Store
export const store = createStore(
  reducers,
  applyMiddleware(thunk)
);