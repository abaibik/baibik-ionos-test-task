import {
  fetchCitiesRequest,
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
} from "./actions";

const mockFetch = (status, returnBody) => {
  global.fetch = () =>
    Promise.resolve({
      ok: true,
      status,
      json: () => Promise.resolve(returnBody),
    });
};

describe("fetchCitiesRequest", () => {
  const unmockedFetch = global.fetch;

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
});
