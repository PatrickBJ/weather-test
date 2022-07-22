import styled from "styled-components";
import WeatherIconInfo from "./WeatherIconInfo";
import { useSelector } from "react-redux";
import { loading, weatherWeek } from "reducers/citiesSlice";
import { timeFormat } from "reducers/settingsSlice";
import { showText, showTextNumber } from "helpers/functionHelper";
import { iconTitleWeek } from "helpers/iconWeatherHelper";

const WeatherWeekContainer = styled.section`
  align-self: center;
  margin-top: 0.8rem;
  align-self: center;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  max-width: 1000px;
  overflow-x: auto;
`;

const WeatherDayWeek = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Day = styled.p`
  font-size: min(max(3vw, 1rem), 1.3rem);
`;
const Temp = styled.p`
  font-size: min(max(3vw, 1rem), 1.2rem);
`;

export default function WeatherWeek() {
  const weather = useSelector(weatherWeek);
  const isLoading = useSelector(loading);
  const time = useSelector(timeFormat);
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
