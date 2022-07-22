import styled from "styled-components";
import { WeatherCity } from "reducers/citiesSlice";
import { getIcon } from "helpers/iconWeatherHelper";
import { Theme } from "styles/theme";
import { darkTheme } from "reducers/settingsSlice";
import { useSelector } from "react-redux";

interface Props {
  children: string;
  weatherCity: WeatherCity | null;
  customStyle?: string;
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
  font-size: 1.3rem;
`;

export default function WeatherIconInfo({
  children,
  weatherCity,
  customStyle,
}: Props) {
  const isDarkTheme = useSelector(darkTheme);
  const [WeatherIcon, IconColor] = getIcon(weatherCity, Theme(isDarkTheme));
  return (
    <WeatherIconContainer customStyle={customStyle}>
      <WeatherIcon className="icon" style={{ fill: String(IconColor) }} />
      <WeatherText>{children}</WeatherText>
    </WeatherIconContainer>
  );
}
