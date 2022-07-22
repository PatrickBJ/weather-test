import styled from "styled-components";
import { WeatherCity } from "reducers/citiesSlice";
import { getIcon } from "helpers/iconWeatherHelper";
import { useSelector } from "react-redux";
import { time } from "reducers/settingsSlice";

interface Props {
  children: string;
  weatherCity: WeatherCity | null;
  customStyle?: string;
  title: string;
}

interface StyleProp {
  customStyle?: string;
}

const WeatherIconContainer = styled.div<StyleProp>`
  display: grid;
  align-self: flex-start;
  justify-items: center;
  ${({ customStyle }) => customStyle}
`;

const WeatherText = styled.p`
  font-size: min(max(3vw, 1rem), 1.5rem);
`;

export default function WeatherIconInfo({
  children,
  weatherCity,
  customStyle,
  title,
}: Props) {
  const timeClock = new Date(useSelector(time));
  const [WeatherIcon, IconColor] = getIcon(weatherCity, timeClock);
  return (
    <WeatherIconContainer customStyle={customStyle}>
      <WeatherIcon
        className="icon"
        style={{ fill: String(IconColor) }}
        title={title}
      />
      <WeatherText>{children}</WeatherText>
    </WeatherIconContainer>
  );
}
