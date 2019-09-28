import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import yelp from './src/api/yelp';

const initialState = [];

// Store
export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk)
);

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return action.payload;

    default:
      return state;
  }
}

// Actions
export const fetchDataAction = (term) => async (dispatch) => {
  try {
    const response = await yelp.get('/search', {
      params: {
        term,
        location: 'Dublin',
        limit: 20
      }
    });

    dispatch({
      type: 'FETCH_DATA',
      payload: response.data.businesses
    });

  } catch (err) {

  }
}