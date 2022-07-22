import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/configureStore";

export const Units = ["Imperial", "Metric", "Standard"];
export const TimeFormats = ["AM/PM", "24h"];

interface SettingsType {
  modalOpen: boolean;
  units: typeof Units[number];
  timeFormat: typeof TimeFormats[number];
  darkTheme: boolean;
  time: number;
}

const initialState: SettingsType = {
  modalOpen: false,
  units: Units[0],
  timeFormat: TimeFormats[1],
  darkTheme: true,
  time: new Date().getTime(),
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
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
    saveSettings: (state, action) => {
      state.units = action.payload.unit;
      state.timeFormat = action.payload.time;
      state.modalOpen = false;
    },
    setTime: (state) => {
      state.time = new Date().getTime();
    },
  },
});

export const modalOpen = (state: RootState) => state.settings.modalOpen;
export const units = (state: RootState) => state.settings.units;
export const timeFormat = (state: RootState) => state.settings.timeFormat;
export const darkTheme = (state: RootState) => state.settings.darkTheme;
export const time = (state: RootState) => state.settings.time;

export const { openModal, closeModal, saveSettings, toggleTheme, setTime } =
  settingsSlice.actions;

export default settingsSlice.reducer;
