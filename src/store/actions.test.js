import {
  fetchCitiesRequest,
  fetchCityInfections,
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_ERROR,
  FETCH_CITY_INFECTIONS_REQUEST,
  FETCH_CITY_INFECTIONS_SUCCESS,
} from "./actions";

const mockFetch = (status, returnBody, ok = true) => {
  global.fetch = () =>
    Promise.resolve({
      ok,
      status,
      json: () => Promise.resolve(returnBody),
    });
};

const unmockedFetch = global.fetch;

describe("fetchCitiesRequest", () => {
  afterAll(() => {
    global.fetch = unmockedFetch;
  });
  it("fetch cities", () => {
    const mockDispatch = jest.fn();

    mockFetch(200, {
      cities: [
        {
          cityId: 6,
          cityName: "Ettlingen",
          population: 39373,
        },
      ],
    });

    return fetchCitiesRequest(mockDispatch).then(() => {
      expect(mockDispatch.mock.calls.length).toBe(2);
      expect(mockDispatch.mock.calls[0][0]).toEqual({
        type: FETCH_CITIES_REQUEST,
      });
      expect(mockDispatch.mock.calls[1][0]).toEqual({
        type: FETCH_CITIES_SUCCESS,
        payload: [
          {
            cityId: 6,
            cityName: "Ettlingen",
            population: 39373,
          },
        ],
      });
    });
  });

  it("fetch cities failure", () => {
    const mockDispatch = jest.fn();

    mockFetch(400, {}, false);

    return fetchCitiesRequest(mockDispatch).then(() => {
      expect(mockDispatch.mock.calls.length).toBe(2);
      expect(mockDispatch.mock.calls[1][0].type).toBe(FETCH_CITIES_ERROR);
    });
  });
});

describe("fetchCityInfections", () => {
  afterAll(() => {
    global.fetch = unmockedFetch;
  });

  it("fetch infections", () => {
    mockFetch(200, {
      cityName: "Karlsruhe",
      cityInfections: [
        {
          date: "2020-12-28",
          totalCases: 4801,
          activeCases: 369,
        },
        {
          date: "2020-12-29",
          totalCases: 4835,
          activeCases: 328,
        },
        {
          date: "2020-12-30",
          totalCases: 4917,
          activeCases: 370,
        },
        {
          date: "2020-12-31",
          totalCases: 4982,
          activeCases: 394,
        },
      ],
    });

    const mockDispatch = jest.fn();

    const getState = () => ({
      timePeriod: { startDate: new Date(), endDate: new Date() },
      currentCity: { currentCityId: 5 },
    });

    return fetchCityInfections(mockDispatch, getState).then(() => {
      expect(mockDispatch.mock.calls.length).toBe(2);
      expect(mockDispatch.mock.calls[0][0]).toEqual({
        type: FETCH_CITY_INFECTIONS_REQUEST,
      });
      expect(mockDispatch.mock.calls[1][0]).toEqual({
        type: FETCH_CITY_INFECTIONS_SUCCESS,
        payload: [
          {
            date: "2020-12-28",
            totalCases: 4801,
            activeCases: 369,
          },
          {
            date: "2020-12-29",
            totalCases: 4835,
            activeCases: 328,
          },
          {
            date: "2020-12-30",
            totalCases: 4917,
            activeCases: 370,
          },
          {
            date: "2020-12-31",
            totalCases: 4982,
            activeCases: 394,
          },
        ],
      });
    });
  });
});
