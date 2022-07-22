import styled from "styled-components";
import WeatherIconInfo from "./WeatherIconInfo";
import { loading, weatherDay } from "reducers/citiesSlice";
import { timeFormat } from "reducers/settingsSlice";
import { useSelector } from "react-redux";
import { clockFormat } from "helpers/timeHelper";
import { showText, showTextNumber } from "helpers/functionHelper";
import { iconTitleDay } from "helpers/iconWeatherHelper";

const WeatherDayContainer = styled.section`
  align-self: center;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "mockLeft center right";
`;

const WeatherComplement = styled.section`
  margin-top: 20px;
  grid-area: right;
  display: flex;
  flex-direction: column;
  justify-items: center;
  color: ${({ theme }) => theme.text};
  font-size: min(max(2vw, 0.6rem), 1.3rem);
`;

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
