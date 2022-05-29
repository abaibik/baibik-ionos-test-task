import { configureStore } from "@reduxjs/toolkit";
import { FetchCitiesReducer, SetTimePeriod } from "./reducers";

export const store = configureStore({
  reducer: {
    cities: FetchCitiesReducer,
    timePeriod: SetTimePeriod,
  },
});
