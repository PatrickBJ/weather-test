import * as c from "./constants";

export const darkTheme = {
  body: c.Black,
  inside: c.Black,
  border: c.Purple,
  text: c.White,
  hoverBody: c.White,
  hoverText: c.Blue,
  filter: "invert(1)",
};

export const lightTheme = {
  body: c.White,
  inside: c.White,
  border: c.Purple,
  text: c.Black,
  hoverBody: c.Black,
  hoverText: c.Blue,
  filter: "none",
};

export const Theme = (isDarkTheme: boolean) =>
  isDarkTheme ? darkTheme : lightTheme;
