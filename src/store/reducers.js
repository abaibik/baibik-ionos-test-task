import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_ERROR,
  SET_TIME_PERIOD,
  SET_CURRENT_CITY_ID,
  FETCH_CITY_INFECTIONS_REQUEST,
  FETCH_CITY_INFECTIONS_SUCCESS,
  FETCH_CITY_INFECTIONS_ERROR,
} from "./actions";

export const initialStateFetchCities = {
  cities: [],
  isFetching: false,
  error: null,
};

export const FetchCitiesReducer = (state = initialStateFetchCities, action) => {
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

export const initialStateSetTimePeriod = {
  startDate: {},
  endDate: {},
};

export const SetTimePeriodReducer = (
  state = initialStateSetTimePeriod,
  action
) => {
  switch (action.type) {
    case SET_TIME_PERIOD:
      return {
        ...state,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      };
    default:
      return state;
  }
};

export const initialStateSetCurrentCity = {
  currentCityId: null,
  currentCityName: "",
};

export const SetCurrentCityReducer = (
  state = initialStateSetCurrentCity,
  action
) => {
  switch (action.type) {
    case SET_CURRENT_CITY_ID:
      return {
        ...state,
        currentCityId: action.payload.cityId,
        currentCityName: action.payload.cityName,
      };
    default:
      return state;
  }
};

export const initialStateFetchInfections = {
  infections: [],
  isFetching: false,
  error: null,
};

export const FetchInfectionsReducer = (
  state = initialStateFetchInfections,
  action
) => {
  switch (action.type) {
    case FETCH_CITY_INFECTIONS_REQUEST:
      return { ...state, isFetching: true, error: null };
    case FETCH_CITY_INFECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        infections: action.payload,
      };
    case FETCH_CITY_INFECTIONS_ERROR:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};
