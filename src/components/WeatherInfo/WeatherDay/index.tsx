import WeatherIconInfo from "../WeatherIconInfo";
import { loading, weatherDay } from "reducers/citiesSlice";
import { timeFormat } from "reducers/settingsSlice";
import { useSelector } from "react-redux";
import { clockFormat } from "helpers/timeHelper";
import { showText, showTextNumber } from "helpers/functionHelper";
import { iconTitleDay } from "helpers/iconWeatherTitleHelper";
import { WeatherDayContainer, WeatherComplement } from "./WeatherDay.style";

export default function WeatherDay() {
  const weather = useSelector(weatherDay);
  const timeFormatStr = useSelector(timeFormat);
  const isLoading = useSelector(loading);

  return (
    <WeatherDayContainer>
      <WeatherIconInfo
        weatherCity={weather}
        title={iconTitleDay(weather)}
        customStyle="grid-area: center;"
      >
        {showText(weather?.weather, isLoading)}
      </WeatherIconInfo>
      <WeatherComplement>
        <p>Temp: {showTextNumber(weather?.temp, isLoading)}°</p>
        <p>Feels Like: {showTextNumber(weather?.feelsLike, isLoading)}°</p>
        <p>Humidity: {showTextNumber(weather?.humidity, isLoading)}%</p>
        <p>
          Sunrise:{" "}
          {showText(
            weather?.sunrise && clockFormat(weather?.sunrise, timeFormatStr),
            isLoading
          )}
        </p>
        <p>
          Sunset:{" "}
          {showText(
            weather?.sunset && clockFormat(weather?.sunset, timeFormatStr),
            isLoading
          )}
        </p>
      </WeatherComplement>
    </WeatherDayContainer>
  );
}
