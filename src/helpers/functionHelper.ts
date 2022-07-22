export const isCitySearched = (city: string, searchCity: string) => {
  return city.toLowerCase().includes(searchCity.toLowerCase());
};

export const showText = (item: unknown) => {
  let text = "...";
  if (item) text = String(item);
  return text;
};

export const showTextNumber = (item: unknown) => {
  let text = "...";
  if (item) text = Number(item).toFixed();
  return text;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isOneDay = (location: any) => {
  return location?.pathname !== "/7days";
};
