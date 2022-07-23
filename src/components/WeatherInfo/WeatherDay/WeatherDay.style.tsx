import styled from "styled-components";

export const WeatherDayContainer = styled.section`
  align-self: center;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "mockLeft center right";
`;

export const WeatherComplement = styled.section`
  margin-top: 20px;
  grid-area: right;
  display: flex;
  flex-direction: column;
  justify-items: center;
  color: ${({ theme }) => theme.text};
  font-size: min(max(2vw, 0.6rem), 1.3rem);
`;
