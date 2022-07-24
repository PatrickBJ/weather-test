import { screen } from "@testing-library/react";
import { darkTheme } from "styles/theme";
import { renderApp } from "./helpers/testHelpers";

import { mockApi, mockedWeatherAllDays } from "./helpers/apiHelpers";

const cityName = "Jacaraipe";

it("7days route", async () => {
  const mockedData = mockedWeatherAllDays();
  mockApi(mockedData);

  const { user } = renderApp(undefined, { route: "/7days" });

  expect(
    screen.getByText("Pick a day to see the full forecast")
  ).toBeInTheDocument();

  const buttonCity = await screen.findByText(cityName);
  await user.click(buttonCity);

  const backgroundColor = darkTheme.hoverBody;
  const textColor = darkTheme.hoverText;
  const selectedRoute = await screen.findByText("7 Days");

  expect(selectedRoute).toHaveStyle(`background-color: ${backgroundColor}`);
  expect(selectedRoute).toHaveStyle(`color: ${textColor}`);
});

it("any url but 7days route", async () => {
  const mockedData = mockedWeatherAllDays();
  mockApi(mockedData);

  renderApp(undefined, { route: "/anything" });

  const city = await screen.findByText(cityName, { selector: "p" });
  expect(city).toBeInTheDocument();

  const backgroundColor = darkTheme.hoverBody;
  const textColor = darkTheme.hoverText;
  const selectedRoute = await screen.findByText("Now");

  expect(selectedRoute).toHaveStyle(`background-color: ${backgroundColor}`);
  expect(selectedRoute).toHaveStyle(`color: ${textColor}`);
});
