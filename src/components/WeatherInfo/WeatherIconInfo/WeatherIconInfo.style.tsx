import styled from "styled-components";

interface StyleProp {
  customStyle?: string;
}

export const WeatherIconContainer = styled.div<StyleProp>`
  display: grid;
  align-self: flex-start;
  justify-items: center;
  ${({ customStyle }) => customStyle}
`;

export const WeatherText = styled.p`
  font-size: min(max(3vw, 1rem), 1.5rem);
`;
