import { configureStore } from "@reduxjs/toolkit";
import {
  FetchCitiesReducer,
  SetCurrentCityIdReducer,
  SetTimePeriodReducer,
} from "./reducers";

export const store = configureStore({
  reducer: {
    cities: FetchCitiesReducer,
    timePeriod: SetTimePeriodReducer,
    currentCityId: SetCurrentCityIdReducer,
  },
});
