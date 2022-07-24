import { screen } from "@testing-library/react";
import { darkTheme } from "styles/theme";
import { renderApp } from "./helpers/testHelpers";

import {
  mockApi,
  mockedWeatherDayData,
  mockedWeatherAllDays,
} from "./helpers/apiHelpers";

const cityName = "Jacaraipe";

it("weather info one day", async () => {
  const mockedData = mockedWeatherDayData();
  const { data } = mockedData;
  mockApi(mockedData);

  const { user } = renderApp();

  const buttonCity = await screen.findByText(cityName);
  await user.click(buttonCity);

  const cityLabel = await screen.findByText(cityName, { selector: "p" });
  expect(cityLabel).toBeInTheDocument();

  const unknowSvg = await screen.queryByText("unknown.svg");
  expect(unknowSvg).toBeNull();

  const weatherForecast = await screen.queryByText(data.weather[0].main);
  expect(weatherForecast).toBeInTheDocument();

  const temp = await screen.queryByText("Temp: " + data.main.temp + "°");
  expect(temp).toBeInTheDocument();

  const feelsLike = await screen.queryByText(
    "Feels Like: " + data.main.feels_like + "°"
  );
  expect(feelsLike).toBeInTheDocument();

  const humidity = await screen.queryByText(
    "Humidity: " + data.main.humidity + "%"
  );
  expect(humidity).toBeInTheDocument();

  const backgroundColor = darkTheme.hoverBody;
  const textColor = darkTheme.hoverText;
  const selectedRoute = await screen.findByText("Now");

  expect(selectedRoute).toHaveStyle(`background-color: ${backgroundColor}`);
  expect(selectedRoute).toHaveStyle(`color: ${textColor}`);
});

it("click 7 days option", async () => {
  const mockedData = mockedWeatherAllDays();
  mockApi(mockedData);

  const { user } = renderApp();
  const buttonWeek = await screen.findByText("7 Days");
  await user.click(buttonWeek);

  const unknowSvg = await screen.findAllByText("weather-cloudy.svg");
  expect(unknowSvg).toHaveLength(7);
});

it("click now option", async () => {
  const mockedData = mockedWeatherDayData();
  mockApi(mockedData);

  const { user } = renderApp();
  const buttonNow = await screen.findByText("Now");
  await user.click(buttonNow);

  const sunnySvg = await screen.findAllByText("weather-sunny.svg");
  expect(sunnySvg).toHaveLength(1);
});
