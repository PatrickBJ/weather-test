import { configureStore } from "@reduxjs/toolkit";

import settingsReducer from "../reducers/settingsSlice";
import citiesReducer from "../reducers/citiesSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    cities: citiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
