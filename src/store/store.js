import { configureStore } from "@reduxjs/toolkit";
import {
  FetchCitiesReducer,
  FetchInfectionsReducer,
  SetCurrentCityIdReducer,
  SetTimePeriodReducer,
} from "./reducers";

export const store = configureStore({
  reducer: {
    cities: FetchCitiesReducer,
    timePeriod: SetTimePeriodReducer,
    currentCityId: SetCurrentCityIdReducer,
    infections: FetchInfectionsReducer,
  },
});
