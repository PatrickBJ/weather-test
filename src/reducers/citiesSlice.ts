import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/configureStore";

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
    { id: 1, city: "Orlando", lat: 33.44, lon: -94.04 },
    { id: 2, city: "Miami", lat: 33.44, lon: -94.04 },
    { id: 3, city: "Ft. Lauderdale", lat: 33.44, lon: -94.04 },
    { id: 4, city: "Tampa", lat: 33.44, lon: -94.04 },
    { id: 5, city: "Saint Peterbug", lat: 33.44, lon: -94.04 },
    { id: 6, city: "Kissimmee", lat: 33.44, lon: -94.04 },
    { id: 7, city: "Orlando", lat: 33.44, lon: -94.04 },
    { id: 8, city: "Miami", lat: 33.44, lon: -94.04 },
    { id: 9, city: "Ft. Lauderdale", lat: 33.44, lon: -94.04 },
    { id: 10, city: "Tampa", lat: 33.44, lon: -94.04 },
    { id: 11, city: "Saint Peterbug", lat: 33.44, lon: -94.04 },
    { id: 12, city: "Kissimmee", lat: 33.44, lon: -94.04 },
    { id: 13, city: "Orlando", lat: 33.44, lon: -94.04 },
    { id: 14, city: "Miami", lat: 33.44, lon: -94.04 },
    { id: 15, city: "Ft. Lauderdale", lat: 33.44, lon: -94.04 },
    { id: 16, city: "Tampa", lat: 33.44, lon: -94.04 },
    { id: 17, city: "Saint Peterbug", lat: 33.44, lon: -94.04 },
    { id: 18, city: "Kissimmee", lat: 33.44, lon: -94.04 },
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
      const findCity = state.cities.find(
        ({ city }) => city.toLowerCase() === state.searchCity.toLowerCase()
      );
      state.selectedCity = findCity || null;
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
