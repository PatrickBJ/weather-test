import styled from "styled-components";
import { ReactComponent as weatherIcon } from "assets/weather-icons/weather-sunny.svg";

interface Props {
  children: string;
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

const WeatherIcon = styled(weatherIcon)`
  fill: yellow;
  width: 140px;
  height: auto;
  padding: 0;
  margin: 0;
`;

const WeatherText = styled.p`
  font-size: 1.3rem;
`;

export default function WeatherIconInfo({ children, customStyle }: Props) {
  return (
    <WeatherIconContainer customStyle={customStyle}>
      <WeatherIcon />
      <WeatherText>{children}</WeatherText>
    </WeatherIconContainer>
  );
}
