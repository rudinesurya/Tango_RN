import yelp from '../api/yelp';

const initialState = {
  pending: false,
  restaurants: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RESTAURANTS_PENDING':
      return { ...state, pending: true }
    case 'FETCH_RESTAURANTS_SUCCESS':
      return {
        ...state,
        pending: false,
        restaurants: action.payload
      };
    case 'FETCH_RESTAURANTS_ERROR':
      return {
        ...state,
        pending: false,
        error: action.payload
      };

    default:
      return state;
  }
}

export default reducer;

// Actions
export const fetchRestaurantsAction = (term) => async (dispatch) => {
  try {
    dispatch({
      type: 'FETCH_RESTAURANTS_PENDING'
    });

    const response = await yelp.get('/search', {
      params: {
        term,
        location: 'Dublin',
        limit: 20
      }
    });

    dispatch({
      type: 'FETCH_RESTAURANTS_SUCCESS',
      payload: response.data.businesses
    });

  } catch (err) {
    dispatch({
      type: 'FETCH_RESTAURANTS_ERROR',
      payload: err
    });
  }
}