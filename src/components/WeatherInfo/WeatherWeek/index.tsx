import WeatherIconInfo from "../WeatherIconInfo";
import { useSelector } from "react-redux";
import { loading, weatherWeek } from "reducers/citiesSlice";
import { timeFormat } from "reducers/settingsSlice";
import { showText, showTextNumber } from "helpers/functionHelper";
import { iconTitleWeek } from "helpers/iconWeatherTitleHelper";
import {
  WeatherWeekContainer,
  WeatherDayWeek,
  Day,
  Temp,
  NotFound,
} from "./WeatherWeek.style";

export default function WeatherWeek() {
  const weather = useSelector(weatherWeek);
  const isLoading = useSelector(loading);
  const time = useSelector(timeFormat);

  if (!weather)
    return (
      <NotFound>
        {!weather && (
          <WeatherIconInfo weatherCity={weather} title="...">
            {"..."}
          </WeatherIconInfo>
        )}
      </NotFound>
    );

  return (
    <WeatherWeekContainer>
      {weather?.map((dayOfWeek) => (
        <WeatherDayWeek key={dayOfWeek.day}>
          <Day>{showText(dayOfWeek.dayOfWeek, isLoading)}</Day>
          <WeatherIconInfo
            weatherCity={dayOfWeek}
            title={iconTitleWeek(dayOfWeek, time)}
          >
            {showText(dayOfWeek.weather, isLoading)}
          </WeatherIconInfo>
          <Temp>
            H: {showTextNumber(dayOfWeek.tempMin, isLoading)}°/L:{" "}
            {showTextNumber(dayOfWeek.tempMax, isLoading)}°
          </Temp>
        </WeatherDayWeek>
      ))}
    </WeatherWeekContainer>
  );
}
