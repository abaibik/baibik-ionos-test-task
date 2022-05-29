import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_ERROR,
} from "./actions";

export const initialState = { cities: [], isFetching: false, error: null };

export const FetchCitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES_REQUEST:
      return { ...state, isFetching: true, error: null };
    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload,
        isFetching: false,
        error: null,
      };
    case FETCH_CITIES_ERROR:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};
