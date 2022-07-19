import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/configureStore";

interface SettingsType {
  modalOpen: boolean,
  units: "Imperial" | "Metric" | "Standard",
  timeFormat: "AM/PM" | "24H",
  darkTheme: boolean
}

const initialState: SettingsType = {
  modalOpen: false,
  units: "Imperial",
  timeFormat: "24H",
  darkTheme: true,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    openModal: (state) => {
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
    setUnits: (state, action) => {
      state.units = action.payload;
    },
    setTimeFormat: (state, action) => {
      state.timeFormat = action.payload;
    },
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const modalOpen = (state: RootState) => state.settings.modalOpen;
export const units = (state: RootState) => state.settings.units;
export const timeFormat = (state: RootState) => state.settings.timeFormat;
export const darkTheme = (state: RootState) => state.settings.darkTheme;

export const { openModal, closeModal, setUnits, setTimeFormat, toggleTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
