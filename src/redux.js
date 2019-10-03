import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import catalogReducer from './reducers/catalogReducer';
import productReducer from './reducers/productReducer';
import authReducer from './reducers/authReducer';

const reducers = combineReducers({
  catalog: catalogReducer,
  product: productReducer,
  auth: authReducer,
});

// Store
export const store = createStore(
  reducers,
  applyMiddleware(thunk)
);