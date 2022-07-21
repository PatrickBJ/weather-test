import styled from "styled-components";
import WeatherIconInfo from "./WeatherIconInfo";

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
  return (
    <WeatherDayContainer>
      <WeatherIconInfo customStyle="grid-area: center;">Sunny</WeatherIconInfo>
      <WeatherComplement>
        <p>Temp: 78°</p>
        <p>Feels Like: 80°</p>
        <p>Humidity: 100%</p>
        <p>Sunrise: 6:48 AM</p>
        <p>Sunset: 7:23 PM</p>
      </WeatherComplement>
    </WeatherDayContainer>
  );
}
