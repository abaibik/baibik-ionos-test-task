export const FETCH_CITIES_REQUEST = "FETCH_CITIES_REQUEST";
export const FETCH_CITIES_SUCCESS = "FETCH_CITIES_SUCCESS";
export const FETCH_CITIES_ERROR = "FETCH_CITIES_ERROR";

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
