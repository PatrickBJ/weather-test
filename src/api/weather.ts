/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";

import axios from "axios";
import {
  CityItem,
  setLoading,
  setWeatherDay,
  setWeatherWeek,
  WeatherCity,
} from "reducers/citiesSlice";
import {
  successApiResult,
  successApiWeekResult,
  dataToWeatherCity,
  dataToWeatherCityWeek,
} from "./helper";
import { isOneDay } from "helpers/functionHelper";

export const weatherApi = async (
  cityItem: CityItem,
  location: any,
  unit: string,
  dispatch: any
) => {
  if (isOneDay(location)) {
    dispatch(setLoading(true));
    const weatherDay = await getDayWeather(cityItem, unit);
    dispatch(setWeatherDay(weatherDay));
  } else {
    dispatch(setLoading(true));
    const weatherWeek = await getWeekWeather(cityItem, unit);
    dispatch(setWeatherWeek(weatherWeek));
  }
};

export const getDayWeather = async (cityItem: CityItem, unit: string) => {
  let weatherDay: WeatherCity | null = null;
  const lat = cityItem.lat;
  const lon = cityItem.lon;
  const API_KEY = process.env.REACT_APP_API_KEY as string;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`;

  try {
    const { data } = await axios.get(url);

    if (successApiResult(data)) weatherDay = dataToWeatherCity(data);
    return weatherDay;
  } catch (err) {
    toast.error("Error searching weather forecast for this city.");
    return null;
  }
};

export const getWeekWeather = async (cityItem: CityItem, unit: string) => {
  let weatherWeek: Array<WeatherCity> | null = null;
  const lat = cityItem.lat;
  const lon = cityItem.lon;
  const API_KEY = process.env.REACT_APP_API_KEY as string;
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}&units=${unit}`;

  try {
    const { data } = await axios.get(url);
    if (successApiWeekResult(data)) weatherWeek = dataToWeatherCityWeek(data);
    return weatherWeek;
  } catch (err) {
    toast.error("Error searching weather forecast for this city.");
    return null;
  }
};
