import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/configureStore";

interface CitiesType {
  selectedCity: string,
  cities: Array<string>
}

const initialState: CitiesType = {
  selectedCity: "",
  cities: [
    "Orlando","Miami","Ft. Lauderdale","Tampa","Saint Peterbug","Kissimmee",
    "Orlando","Miami","Ft. Lauderdale","Tampa","Saint Peterbug","Kissimmee",
    "Orlando","Miami","Ft. Lauderdale","Tampa","Saint Peterbug","Kissimmee"
  ]
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setSelectedCity: (state, action: PayloadAction<string>) => {
        state.selectedCity = action.payload;
    },
    setCities: (state, action: PayloadAction<Array<string>>)=> {
        state.cities = action.payload;
    },
  },
});

export const selectedCity = (state: RootState ) => state.cities.selectedCity;
export const cities = (state: RootState ) => state.cities.cities;

export const { setSelectedCity, setCities } = citiesSlice.actions;

export default citiesSlice.reducer;
