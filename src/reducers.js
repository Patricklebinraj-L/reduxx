import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actions.js';

const initialState = {
  data: [],
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
