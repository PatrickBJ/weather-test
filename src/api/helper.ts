/* eslint-disable @typescript-eslint/no-explicit-any */
import { epochToDateString, epochToDayOfWeek } from "helpers/timeHelper";

export const successApiResult = (data: Record<string, unknown>) => {
  return data && (data.cod === 200 || data.cod === "200");
};

export const successApiWeekResult = (data: Record<string, any>) => {
  return data && data.daily && data.daily.length > 0;
};

export const dataToWeatherCity = (data: Record<string, any>) => {
  return {
    dayOfWeek: epochToDayOfWeek(data?.dt),
    day: epochToDateString(data?.dt),
    weather: data?.weather[0]?.main,
    weatherId: data?.weather[0]?.id,
    weatherDescription: data?.weather[0]?.description,
    weatherIcon: data?.weather[0]?.icon,
    temp: data?.main?.temp,
    tempMin: data?.main?.temp_min,
    tempMax: data?.main?.temp_max,
    feelsLike: data?.main?.feels_like,
    humidity: data?.main?.humidity,
    sunrise: epochToDateString(data?.sys?.sunrise),
    sunset: epochToDateString(data?.sys?.sunset),
  };
};

export const dataToWeatherCityWeek = (data: Record<string, any>) => {
  const weatherWeek = [];

  for (let i = 0; i < 7; i++) {
    const day = data.daily[i];
    weatherWeek.push({
      dayOfWeek: epochToDayOfWeek(day?.dt),
      day: epochToDateString(day?.dt),
      weather: day?.weather[0]?.main,
      weatherId: day?.weather[0]?.id,
      weatherDescription: day?.weather[0]?.description,
      weatherIcon: day?.weather[0]?.icon,
      temp: day?.temp?.day,
      tempMin: day?.temp?.min,
      tempMax: day?.temp?.max,
      feelsLike: day?.feels_like?.day,
      humidity: day?.humidity,
      sunrise: epochToDateString(day?.sunrise),
      sunset: epochToDateString(day?.sunset),
    });
  }

  return weatherWeek;
};
