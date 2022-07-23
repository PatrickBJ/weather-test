import { useCallback } from "react";
import { getIcon, getIconToday } from "helpers/iconWeatherHelper";
import { isToday } from "helpers/timeWeatherHelper";
import { WeatherCity } from "reducers/citiesSlice";
import { ReactComponent as Unknown } from "assets/unknown.svg";
import { Cyan } from "styles/constants";

interface Props {
  weatherCity: WeatherCity | null;
  title: string;
  time: Date;
}

export default function WeatherIcon({ weatherCity, title, time }: Props) {
  const defaultIconColor = Cyan;

  const getIconTodayCallback = useCallback(
    (weatherCity: WeatherCity, time: Date) => getIconToday(weatherCity, time),
    [weatherCity, time]
  );

  const getIconCallback = useCallback(
    (weatherCity: WeatherCity) => getIcon(weatherCity),
    [weatherCity]
  );

  if (!weatherCity) {
    return (
      <Unknown
        className="icon"
        style={{ fill: String(defaultIconColor) }}
        title={title}
      />
    );
  }

  const date: Date = new Date(weatherCity.day);

  if (isToday(time, date)) {
    const [Icon, IconColor] = getIconTodayCallback(weatherCity, time);
    return (
      <Icon
        className="icon"
        style={{ fill: String(IconColor) }}
        title={title}
      />
    );
  }

  const [Icon, IconColor] = getIconCallback(weatherCity);

  return (
    <Icon className="icon" style={{ fill: String(IconColor) }} title={title} />
  );
}
