import styled from "styled-components";
import { ReactComponent as weatherIcon } from "assets/weather-icons/weather-sunny.svg";

interface Props {
  children: string;
}

const WeatherIconContainer = styled.div`
  grid-area: center;
  display: grid;
  align-self: flex-start;
  justify-items: center;
`;

const WeatherIcon = styled(weatherIcon)`
  fill: yellow;
  width: 140px;
  height: auto;
  padding: 0;
  margin: 0;
`;

const WeatherText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
`;

export default function WeatherIconInfo({ children }: Props) {
  return (
    <WeatherIconContainer>
      <WeatherIcon />
      <WeatherText>{children}</WeatherText>
    </WeatherIconContainer>
  );
}
