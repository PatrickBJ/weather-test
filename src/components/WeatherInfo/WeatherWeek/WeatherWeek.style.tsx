import styled from "styled-components";

export const WeatherWeekContainer = styled.section`
  align-self: center;
  margin-top: 0.8rem;
  align-self: center;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  max-width: 1000px;
  overflow-x: auto;
`;

export const WeatherDayWeek = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Day = styled.p`
  font-size: min(max(3vw, 1rem), 1.3rem);
`;
export const Temp = styled.p`
  font-size: min(max(3vw, 1rem), 1.2rem);
`;
