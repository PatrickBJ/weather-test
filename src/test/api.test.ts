import { getDayWeather, getWeekWeather } from "api/weather";

import { Units } from "reducers/settingsSlice";
import {
  mockApi,
  mockCityItem,
  mockedWeatherDayData,
  mockedWeatherWeekData,
} from "./apiHelpers";

it("success one day api", async () => {
  mockApi(mockedWeatherDayData());

  const unit = Units[0];
  const weather = await getDayWeather(mockCityItem, unit);
  expect(weather).not.toBeNull();
});

it("error one day api", async () => {
  mockApi({ data: {} });

  const unit = Units[0];
  const weather = await getDayWeather(mockCityItem, unit);
  expect(weather).toBeNull();
});

it("success week api", async () => {
  mockApi(mockedWeatherWeekData());

  const unit = Units[0];
  const weather = await getWeekWeather(mockCityItem, unit);
  expect(weather).not.toBeNull();
});

it("error week api", async () => {
  mockApi({});

  const unit = Units[0];
  const weather = await getWeekWeather(mockCityItem, unit);
  expect(weather).toBeNull();
});
