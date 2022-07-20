import styled from "styled-components";
import WeatherIconInfo from "./WeatherIconInfo";

const WeatherWeekContainer = styled.section`
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
  const week = [
    { day: "Mon", forecast: "Sunny", temp: "H: 78°/L: 70°" },
    { day: "Tue", forecast: "Sunny", temp: "H: 78°/L: 70°" },
    { day: "Wed", forecast: "Sunny", temp: "H: 78°/L: 70°" },
    { day: "Thu", forecast: "Sunny", temp: "H: 78°/L: 70°" },
    { day: "Fri", forecast: "Sunny", temp: "H: 78°/L: 70°" },
    { day: "Sat", forecast: "Sunny", temp: "H: 78°/L: 70°" },
    { day: "Sun", forecast: "Sunny", temp: "H: 78°/L: 70°" },
  ];
  return (
    <WeatherWeekContainer>
      {week.map((dayOfWeek) => (
        <WeatherDayWeek key={dayOfWeek.day}>
          <Day>{dayOfWeek.day}</Day>
          <WeatherIconInfo>{dayOfWeek.forecast}</WeatherIconInfo>
          <Temp>{dayOfWeek.temp}</Temp>
        </WeatherDayWeek>
      ))}
    </WeatherWeekContainer>
  );
}
