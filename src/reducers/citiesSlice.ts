import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/configureStore";
import { findCity } from "helpers/functionHelper";

export interface CityItem {
  id: number;
  city: string;
  lat: number;
  lon: number;
}

export interface WeatherCity {
  day: string;
  dayOfWeek: string;
  weather: string;
  weatherId: string;
  weatherDescription: string;
  weatherIcon: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  feelsLike: number;
  humidity: number;
  sunrise: string;
  sunset: string;
}

interface CitiesType {
  selectedCity: CityItem | null;
  searchCity: string;
  cities: Array<CityItem>;
  weatherDay: WeatherCity | null;
  weatherWeek: Array<WeatherCity> | null;
}

const initialState: CitiesType = {
  selectedCity: null,
  searchCity: "",
  cities: [
    { id: 1, city: "Orlando", lat: 28.4159, lon: -81.2988 },
    { id: 2, city: "Miami", lat: 33.44, lon: -94.04 },
    { id: 3, city: "London", lat: 33.44, lon: -94.04 },
    { id: 4, city: "Tampa", lat: 33.44, lon: -94.04 },
    { id: 5, city: "Madrid", lat: 33.44, lon: -94.04 },
    { id: 6, city: "Kissimmee", lat: 33.44, lon: -94.04 },
    { id: 7, city: "Jacaraipe", lat: 33.44, lon: -94.04 },
    { id: 8, city: "Santa Maria de Jetiba", lat: 33.44, lon: -94.04 },
    { id: 9, city: "Rio de Janeiro", lat: 33.44, lon: -94.04 },
    { id: 10, city: "Tokio", lat: 33.44, lon: -94.04 },
    { id: 11, city: "Sydney", lat: 33.44, lon: -94.04 },
    { id: 12, city: "California", lat: 33.44, lon: -94.04 },
    { id: 13, city: "Viena", lat: 33.44, lon: -94.04 },
    { id: 14, city: "Vaticano", lat: 33.44, lon: -94.04 },
    { id: 15, city: "Genebra", lat: 33.44, lon: -94.04 },
    { id: 16, city: "Cairo", lat: 33.44, lon: -94.04 },
    { id: 17, city: "Toronto", lat: 33.44, lon: -94.04 },
    { id: 18, city: "Pretoria", lat: 33.44, lon: -94.04 },
  ],
  weatherDay: null,
  weatherWeek: null,
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setSelectedCity: (state, action: PayloadAction<CityItem>) => {
      state.selectedCity = action.payload;
    },
    setSearchCity: (state, action: PayloadAction<string>) => {
      state.searchCity = action.payload;
    },
    selectSearchCity: (state) => {
      const city = findCity(state.cities, state.searchCity);
      state.selectedCity = city || null;
    },
    setCities: (state, action: PayloadAction<Array<CityItem>>) => {
      state.cities = action.payload;
    },
    setWeatherDay: (state, action: PayloadAction<WeatherCity>) => {
      state.weatherDay = action.payload;
    },
    setWeatherWeek: (state, action: PayloadAction<Array<WeatherCity>>) => {
      state.weatherWeek = action.payload;
    },
  },
});

export const selectedCity = (state: RootState) => state.cities.selectedCity;
export const searchCity = (state: RootState) => state.cities.searchCity;
export const cities = (state: RootState) => state.cities.cities;
export const weatherDay = (state: RootState) => state.cities.weatherDay;
export const weatherWeek = (state: RootState) => state.cities.weatherWeek;

export const {
  setSelectedCity,
  setSearchCity,
  setCities,
  selectSearchCity,
  setWeatherDay,
  setWeatherWeek,
} = citiesSlice.actions;

export default citiesSlice.reducer;
