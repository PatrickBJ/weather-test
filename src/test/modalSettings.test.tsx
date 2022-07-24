import { screen } from "@testing-library/react";

import { clockFormat } from "helpers/timeHelper";
import "./helpers/matchMedia";
import { renderApp } from "./helpers/testHelpers";
import { weatherApi } from "api/weather";

it("open modal", async () => {
  const { user } = renderApp();
  const buttonSettings = screen.getByText("Settings");
  await user.click(buttonSettings);

  expect(screen.getByRole("dialog")).toBeInTheDocument();
  expect(
    screen.getByText("Settings", { selector: "header" })
  ).toBeInTheDocument();
});

it("close modal", async () => {
  const { user } = renderApp();

  const buttonClose = screen.getByText("Cancel");
  await user.click(buttonClose);

  expect(screen.queryByRole("dialog")).toBeNull();
  expect(screen.queryByText("Settings", { selector: "header" })).toBeNull();
});

it("test change time format to AM/PM", async () => {
  const { user } = renderApp();

  const buttonSettings = screen.getByText("Settings");
  await user.click(buttonSettings);

  const buttonTimeFormat = screen.getByText("AM/PM", { selector: "button" });
  await user.click(buttonTimeFormat);

  const buttonSave = screen.getByText("Save");
  await user.click(buttonSave);

  expect(screen.getByTestId("clock").textContent).toBe(
    clockFormat(new Date(), "AM/PM")
  );
});

jest.mock("api/weather");

it("test change unit", async () => {
  const { user } = renderApp();

  const buttonSettings = screen.getByText("Settings");
  await user.click(buttonSettings);

  const buttonUnit = screen.getByText("Metric", { selector: "button" });
  await user.click(buttonUnit);

  const buttonSave = screen.getByText("Save");
  await user.click(buttonSave);

  expect(weatherApi).toBeCalledTimes(1);
});
