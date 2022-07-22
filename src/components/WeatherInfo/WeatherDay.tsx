import styled from "styled-components";
import WeatherIconInfo from "./WeatherIconInfo";
import { weatherDay } from "reducers/citiesSlice";
import { timeFormat } from "reducers/settingsSlice";
import { useSelector } from "react-redux";
import { clockFormat } from "helpers/timeHelper";
import { showText, showTextNumber } from "helpers/functionHelper";

const WeatherDayContainer = styled.section`
  align-self: center;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 150px 1fr 150px;
  grid-template-areas: "mockLeft center right";
`;

const WeatherComplement = styled.section`
  margin-top: 20px;
  grid-area: right;
  display: flex;
  flex-direction: column;
  justify-items: center;
  color: ${({ theme }) => theme.text};
`;

export default function WeatherDay() {
  const weather = useSelector(weatherDay);
  const timeFormatStr = useSelector(timeFormat);

  return (
    <WeatherDayContainer>
      <WeatherIconInfo weatherCity={weather} customStyle="grid-area: center;">
        {showText(weather?.weather)}
      </WeatherIconInfo>
      <WeatherComplement>
        <p>Temp: {showTextNumber(weather?.temp)}°</p>
        <p>Feels Like: {showTextNumber(weather?.feelsLike)}°</p>
        <p>Humidity: {showTextNumber(weather?.humidity)}%</p>
        <p>
          Sunrise:{" "}
          {showText(
            weather?.sunrise && clockFormat(weather?.sunrise, timeFormatStr)
          )}
        </p>
        <p>
          Sunset:{" "}
          {showText(
            weather?.sunset && clockFormat(weather?.sunset, timeFormatStr)
          )}
        </p>
      </WeatherComplement>
    </WeatherDayContainer>
  );
}
