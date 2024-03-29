import { ReactComponent as SunsetUp } from "assets/weather-icons/weather-sunset-up.svg";
import { ReactComponent as SunsetDown } from "assets/weather-icons/weather-sunset-down.svg";
import { ReactComponent as Sunset } from "assets/weather-icons/weather-sunset.svg";
import { ReactComponent as Sunny } from "assets/weather-icons/weather-sunny.svg";
import { ReactComponent as SnowyRainy } from "assets/weather-icons/weather-snowy-rainy.svg";
import { ReactComponent as SnowyHeavy } from "assets/weather-icons/weather-snowy-heavy.svg";
import { ReactComponent as Snowy } from "assets/weather-icons/weather-snowy.svg";
import { ReactComponent as Pouring } from "assets/weather-icons/weather-pouring.svg";
import { ReactComponent as PartlyCloudy } from "assets/weather-icons/weather-partly-cloudy.svg";
import { ReactComponent as Night } from "assets/weather-icons/weather-night.svg";
import { ReactComponent as LightningRainy } from "assets/weather-icons/weather-lightning-rainy.svg";
import { ReactComponent as Lightning } from "assets/weather-icons/weather-lightning.svg";
import { ReactComponent as Fog } from "assets/weather-icons/weather-fog.svg";
import { ReactComponent as Cloudy } from "assets/weather-icons/weather-cloudy.svg";
import { ReactComponent as Unknown } from "assets/unknown.svg";

import { isNight, isSunDown, isSunrise, isSunset } from "./timeWeatherHelper";
import { WeatherCity } from "reducers/citiesSlice";
import * as c from "styles/constants";

export const getIconToday = (weatherCity: WeatherCity, time: Date) => {
  const iconCode: string = weatherCity.weatherIcon;
  const sunrise: Date = new Date(weatherCity.sunrise);
  const sunset: Date = new Date(weatherCity.sunset);

  const night = isNight(time, sunrise, sunset);
  const todayColor = night ? c.Purple : c.Blue;

  // clear sky
  if (iconCode === "01d" || iconCode === "01n") {
    if (isSunset(time, sunrise, sunset)) return [Sunset, c.Yellow];
    if (isSunrise(time, sunrise)) return [SunsetUp, c.Yellow];
    if (isSunDown(time, sunset)) return [SunsetDown, c.Yellow];
    if (night) return [Night, todayColor];
    return [Sunny, c.Yellow];
  }

  return getIcon(weatherCity, todayColor);
};

export const getIcon = (weatherCity: WeatherCity, todayColor?: string) => {
  const generalColor = todayColor || c.Cyan;

  const iconId: string = weatherCity.weatherId;
  const iconCode: string = weatherCity.weatherIcon;

  // clear sky
  if (iconCode === "01d" || iconCode === "01n") return [Sunny, c.Yellow];

  // clouds
  if (iconCode === "02d" || iconCode === "02n")
    return [PartlyCloudy, generalColor];

  if (
    iconCode === "03d" ||
    iconCode === "03n" ||
    iconCode === "04d" ||
    iconCode === "04n"
  )
    return [Cloudy, generalColor];

  // Rain
  if (
    iconCode === "09d" ||
    iconCode === "09n" ||
    iconCode === "10d" ||
    iconCode === "10n"
  ) {
    if (
      iconId === "502" ||
      iconId === "503" ||
      iconId === "504" ||
      iconId === "521" ||
      iconId === "522" ||
      iconId === "531"
    )
      return [Pouring, generalColor];
    return [Cloudy, generalColor];
  }

  // thunderstorm
  if (iconCode === "11d" || iconCode === "11n") {
    if (
      iconId === "210" ||
      iconId === "211" ||
      iconId === "212" ||
      iconId === "221"
    )
      return [Lightning, generalColor];
    return [LightningRainy, generalColor];
  }

  // snow
  if (iconCode === "13d" || iconCode === "13n") {
    if (iconId === "615" || iconId === "616" || iconId === "620")
      return [SnowyRainy, generalColor];
    if (iconId === "621" || iconId === "622") return [SnowyHeavy, generalColor];
    return [Snowy, generalColor];
  }

  // mist
  if (iconCode === "50d" || iconCode === "50n") return [Fog, generalColor];

  return [Unknown, generalColor];
};
