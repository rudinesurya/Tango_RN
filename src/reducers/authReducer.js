const initialState = {
  pending: false,
  isSignedIn: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN_PENDING':
      return { ...state, pending: true }
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        pending: false,
        isSignedIn: true
      };
    case 'SIGN_IN_ERROR':
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
export const signInAction = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: 'SIGN_IN_PENDING'
    });

    // fake delay

    dispatch({
      type: 'SIGN_IN_SUCCESS'
    });

  } catch (err) {
    dispatch({
      type: 'SIGN_IN_ERROR',
      payload: err
    });
  }
}