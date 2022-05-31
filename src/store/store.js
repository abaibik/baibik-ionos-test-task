import { configureStore } from "@reduxjs/toolkit";
import {
  FetchCitiesReducer,
  FetchInfectionsReducer,
  SetCurrentCityReducer,
  SetTimePeriodReducer,
} from "./reducers";

export const store = configureStore({
  reducer: {
    cities: FetchCitiesReducer,
    timePeriod: SetTimePeriodReducer,
    currentCity: SetCurrentCityReducer,
    infections: FetchInfectionsReducer,
  },
});
