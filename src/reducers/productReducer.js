import yelp from '../api/yelp';

const initialState = {
  pending: false,
  restaurant: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RESTAURANT_PENDING':
      return { ...state, pending: true }
    case 'FETCH_RESTAURANT_SUCCESS':
      return {
        ...state,
        pending: false,
        restaurant: action.payload
      };
    case 'FETCH_RESTAURANT_ERROR':
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
export const fetchRestaurantAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'FETCH_RESTAURANT_PENDING'
    });

    const response = await yelp.get(`/${id}`);

    dispatch({
      type: 'FETCH_RESTAURANT_SUCCESS',
      payload: response.data
    });

  } catch (err) {
    dispatch({
      type: 'FETCH_RESTAURANT_ERROR',
      payload: err
    });
  }
}