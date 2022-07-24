import { screen } from "@testing-library/react";
import { lightTheme } from "styles/theme";
import { renderApp } from "./testHelpers";

it("default pick text", async () => {
  renderApp();
  expect(
    screen.getByText("Pick a day to see the full forecast")
  ).toBeInTheDocument();
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
