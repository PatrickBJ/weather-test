import styled from "styled-components";
import WeatherIconInfo from "./WeatherIconInfo";
import { useSelector } from "react-redux";
import { weatherWeek } from "reducers/citiesSlice";
import { showText, showTextNumber } from "helpers/functionHelper";

const WeatherWeekContainer = styled.section`
  align-self: center;
  margin-top: 0.8rem;
  align-self: flex-start;
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
  font-size: 1.2rem;
`;
const Temp = styled.p`
  font-size: 1.2rem;
`;

export default function WeatherWeek() {
  const weather = useSelector(weatherWeek);
  return (
    <WeatherWeekContainer>
      {weather?.map((dayOfWeek) => (
        <WeatherDayWeek key={dayOfWeek.day}>
          <Day>{showText(dayOfWeek.dayOfWeek)}</Day>
          <WeatherIconInfo weatherCity={dayOfWeek}>
            {showText(dayOfWeek.weather)}
          </WeatherIconInfo>
          <Temp>
            H: {showTextNumber(dayOfWeek.tempMin)}°/L:{" "}
            {showTextNumber(dayOfWeek.tempMax)}°
          </Temp>
        </WeatherDayWeek>
      ))}
    </WeatherWeekContainer>
  );
}
