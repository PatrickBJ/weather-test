import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { lightTheme, darkTheme } from "styles/theme";
import { renderApp } from "./testHelpers";
import { weatherApi } from "api/weather";

it("default pick text", async () => {
  renderApp();
  expect(
    screen.getByText("Pick a day to see the full forecast")
  ).toBeInTheDocument();
});

// Search input
it("search mode turn on", async () => {
  const { user } = renderApp();
  const buttonSearch = screen.getByText("Search");
  await user.click(buttonSearch);

  const cityInput = screen.getByPlaceholderText("Search");

  expect(cityInput).toBeInTheDocument();
});

it("search mode type", async () => {
  const { user } = renderApp();
  const buttonSearch = screen.getByText("Search");
  await user.click(buttonSearch);

  const cityInput = screen.getByPlaceholderText("Search");
  await userEvent.type(cityInput, "ma");
  let selectCity = await screen.findAllByRole("option");
  expect(selectCity).toHaveLength(2);

  await userEvent.type(cityInput, "drid");
  selectCity = await screen.findAllByRole("option");
  expect(selectCity).toHaveLength(1);
});

jest.mock("api/weather");
it("search mode enter", async () => {
  const { user } = renderApp();
  const buttonSearch = screen.getByText("Search");
  await user.click(buttonSearch);

  const cityInput = screen.getByPlaceholderText("Search");
  await userEvent.clear(cityInput);
  await userEvent.type(cityInput, "madrid{enter}");

  const backgroundColor = darkTheme.hoverBody;
  const textColor = darkTheme.hoverText;
  const selectedCity = await screen.findByRole("option");

  expect(selectedCity).toHaveStyle(`background-color: ${backgroundColor}`);
  expect(selectedCity).toHaveStyle(`color: ${textColor}`);

  expect(weatherApi).toBeCalledTimes(1);
});

it("search mode delete text", async () => {
  const { user } = renderApp();
  const buttonSearch = screen.getByText("Search");
  await user.click(buttonSearch);

  const closeButton = screen.getByTestId("close");
  await user.click(closeButton);
  const selectedCity = await screen.findAllByRole("option");

  expect(selectedCity).toHaveLength(18);
});

it("select city", async () => {
  const { user } = renderApp();

  const buttonCity = screen.getByText("Jacaraipe");
  await user.click(buttonCity);

  const backgroundColor = darkTheme.hoverBody;
  const textColor = darkTheme.hoverText;

  expect(buttonCity).toHaveStyle(`background-color: ${backgroundColor}`);
  expect(buttonCity).toHaveStyle(`color: ${textColor}`);

  expect(weatherApi).toBeCalledTimes(1);
});

it("change theme", async () => {
  const { user } = renderApp();
  const buttonTheme = screen.getByText("Dark");
  await user.click(buttonTheme);

  expect(screen.getByText("Light")).toBeInTheDocument();

  const backgroundColor = lightTheme.body;
  const textColor = lightTheme.text;
  const app = screen.getByTestId("app");

  expect(app).toHaveStyle(`background-color: ${backgroundColor}`);
  expect(app).toHaveStyle(`color: ${textColor}`);
});
