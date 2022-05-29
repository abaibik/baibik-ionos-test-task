import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { FetchCitiesReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cities: FetchCitiesReducer,
  },
});
