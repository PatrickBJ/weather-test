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
  loading: boolean;
}

const initialState: CitiesType = {
  selectedCity: null,
  searchCity: "",
  cities: [
    { id: 1, city: "Orlando", lat: 28.538336, lon: -81.379234 },
    { id: 2, city: "Miami", lat: 25.77427, lon: 80.19366 },
    { id: 3, city: "London", lat: 51.509865, lon: -0.118092 },
    { id: 4, city: "Tampa", lat: 27.94752, lon: -82.45843 },
    { id: 5, city: "Madrid", lat: 40.4165, lon: -3.70256 },
    { id: 6, city: "Kissimmee", lat: 28.291956, lon: -81.40757 },
    { id: 7, city: "Jacaraipe", lat: -20.129103, lon: -40.208027 },
    { id: 8, city: "Santa Maria de Jetiba", lat: -20.0263, lon: -40.7409 },
    { id: 9, city: "Rio de Janeiro", lat: -22.908333, lon: -43.196388 },
    { id: 10, city: "Tokio", lat: 35.652832, lon: 139.839478 },
    { id: 11, city: "Sydney", lat: -33.865143, lon: 151.208755 },
    { id: 12, city: "California", lat: 36.778259, lon: -119.417931 },
    { id: 13, city: "Viena", lat: 48.210033, lon: 16.363449 },
    { id: 14, city: "Vaticano", lat: 41.9029, lon: 12.4538 },
    { id: 15, city: "Genebra", lat: 46.204391, lon: 6.143158 },
    { id: 16, city: "Cairo", lat: 30.033333, lon: 31.233334 },
    { id: 17, city: "Toronto", lat: 43.65107, lon: -79.347015 },
    { id: 18, city: "Pretoria", lat: -25.73134, lon: 28.21837 },
  ],
  weatherDay: null,
  weatherWeek: null,
  loading: false,
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
    setWeatherDay: (state, action: PayloadAction<WeatherCity | null>) => {
      state.weatherDay = action.payload;
      state.loading = false;
    },
    setWeatherWeek: (
      state,
      action: PayloadAction<Array<WeatherCity> | null>
    ) => {
      state.weatherWeek = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const selectedCity = (state: RootState) => state.cities.selectedCity;
export const searchCity = (state: RootState) => state.cities.searchCity;
export const cities = (state: RootState) => state.cities.cities;
export const weatherDay = (state: RootState) => state.cities.weatherDay;
export const weatherWeek = (state: RootState) => state.cities.weatherWeek;
export const loading = (state: RootState) => state.cities.loading;

export const {
  setSelectedCity,
  setSearchCity,
  setCities,
  selectSearchCity,
  setWeatherDay,
  setWeatherWeek,
  setLoading,
} = citiesSlice.actions;

export default citiesSlice.reducer;
