export const isCitySearched = (city: string, searchCity: string) => {
  return city.toLowerCase().includes(searchCity.toLowerCase());
};
