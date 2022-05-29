export const FETCH_CITIES_REQUEST = "FETCH_CITIES_REQUEST";
export const FETCH_CITIES_SUCCESS = "FETCH_CITIES_SUCCESS";
export const FETCH_CITIES_ERROR = "FETCH_CITIES_ERROR";

export const SET_TIME_PERIOD = "SET_TIME_PERIOD";

export const SET_CURRENT_CITY_ID = "SET_CURRENT_CITY_ID";

const URL = "https://api.corona-karlsruhe.info/v1";

export const fetchCitiesRequest = (dispatch) => {
  dispatch({
    type: FETCH_CITIES_REQUEST,
  });
  fetch(`${URL}/cities`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch({ type: FETCH_CITIES_SUCCESS, payload: data.cities });
    })
    .catch((error) => {
      dispatch({ type: FETCH_CITIES_ERROR, payload: error });
    });
};

export const setTimePeriod = (date1, date2) => {
  return {
    type: SET_TIME_PERIOD,
    payload: { startDate: date1.toString(), endDate: date2.toString() },
  };
};

export const setCurrentCityId = (cityId) => {
  return {
    type: SET_CURRENT_CITY_ID,
    payload: cityId,
  };
};
