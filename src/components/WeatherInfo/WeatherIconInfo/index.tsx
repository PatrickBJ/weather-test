import { useSelector } from "react-redux";
import { WeatherCity } from "reducers/citiesSlice";
import { time } from "reducers/settingsSlice";
import WeatherIcon from "./WeatherIcon";

import { WeatherIconContainer, WeatherText } from "./WeatherIconInfo.style";

interface Props {
  children: string;
  weatherCity: WeatherCity | null;
  customStyle?: string;
  title: string;
}

export default function WeatherIconInfo({
  children,
  weatherCity,
  customStyle,
  title,
}: Props) {
  const timeClock = new Date(useSelector(time));
  return (
    <WeatherIconContainer customStyle={customStyle}>
      <WeatherIcon weatherCity={weatherCity} title={title} time={timeClock} />
      <WeatherText>{children}</WeatherText>
    </WeatherIconContainer>
  );
}
