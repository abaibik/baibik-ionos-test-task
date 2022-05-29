import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_ERROR,
  SET_TIME_PERIOD,
} from "./actions";

export const initialState = {
  cities: [],
  startDate: {},
  endDate: {},
  isFetching: false,
  error: null,
};

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

export const SetTimePeriod = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME_PERIOD:
      return {
        ...state,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        isFetching: false,
        error: null,
      };
    default:
      return state;
  }
};
