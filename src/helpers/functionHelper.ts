import { CityItem } from "reducers/citiesSlice";

export const isCitySearched = (city: string, searchCity: string) => {
  return city.toLowerCase().includes(searchCity.toLowerCase());
};

export const showText = (item: unknown, loading: boolean) => {
  let text = "...";
  if (item && !loading) text = String(item);
  return text;
};

export const showTextNumber = (item: unknown, loading: boolean) => {
  let text = "...";
  if (item && !loading) text = Number(item).toFixed();
  return text;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isOneDay = (location: any) => {
  return location?.pathname !== "/7days";
};

export const findCity = (cities: Array<CityItem>, searchCity: string) => {
  return cities.find(
    ({ city }) => city.toLowerCase() === searchCity.toLowerCase()
  );
};
