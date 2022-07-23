import { WeatherCity } from "reducers/citiesSlice";
import { clockFormat } from "./timeHelper";

export const iconTitleWeek = (
  weatherCity: WeatherCity | null,
  timeFormat: string
) => {
  let title = "...";
  if (weatherCity) {
    const temp = `Temp: ${weatherCity?.temp}°`;
    const feelsLike = `Feels Like:${weatherCity?.feelsLike}°`;
    const humidity = `Humidity: ${weatherCity?.humidity}%`;
    const sunrise = `Sunrise: ${clockFormat(weatherCity.sunrise, timeFormat)}`;
    const sunset = `Sunset: ${clockFormat(weatherCity.sunset, timeFormat)}`;
    if (weatherCity)
      title =
        temp +
        "\n" +
        feelsLike +
        "\n" +
        humidity +
        "\n" +
        sunrise +
        "\n" +
        sunset;
  }
  return title;
};

export const iconTitleDay = (weatherCity: WeatherCity | null) => {
  let title = "...";
  if (weatherCity)
    title = `H: ${weatherCity?.tempMax}°/L: ${weatherCity?.tempMax}°`;
  return title;
};
