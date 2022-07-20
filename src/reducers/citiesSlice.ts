import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/configureStore";

interface CityItem {
  id: number;
  city: string;
}
interface CitiesType {
  selectedCity: CityItem | null;
  searchCity: string;
  cities: Array<CityItem>;
}

const initialState: CitiesType = {
  selectedCity: null,
  searchCity: "",
  cities: [
    { id: 1, city: "Orlando" },
    { id: 2, city: "Miami" },
    { id: 3, city: "Ft. Lauderdale" },
    { id: 4, city: "Tampa" },
    { id: 5, city: "Saint Peterbug" },
    { id: 6, city: "Kissimmee" },
    { id: 7, city: "Orlando" },
    { id: 8, city: "Miami" },
    { id: 9, city: "Ft. Lauderdale" },
    { id: 10, city: "Tampa" },
    { id: 11, city: "Saint Peterbug" },
    { id: 12, city: "Kissimmee" },
    { id: 13, city: "Orlando" },
    { id: 14, city: "Miami" },
    { id: 15, city: "Ft. Lauderdale" },
    { id: 16, city: "Tampa" },
    { id: 17, city: "Saint Peterbug" },
    { id: 18, city: "Kissimmee" },
  ],
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
  },
});

export const selectedCity = (state: RootState) => state.cities.selectedCity;
export const searchCity = (state: RootState) => state.cities.searchCity;
export const cities = (state: RootState) => state.cities.cities;

export const { setSelectedCity, setSearchCity, setCities, selectSearchCity } =
  citiesSlice.actions;

export default citiesSlice.reducer;
