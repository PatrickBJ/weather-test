import styled from "styled-components";

export const WeatherEmptyContainer = styled.main`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

export const WeatherContainer = styled.main`
  padding: 20px 15px;
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 1fr 50px;
  align-items: center;
  justify-content: space-between;
  overflow-x: auto;
`;

export const City = styled.p`
  align-self: center;
  text-align: center;
  font-size: 1.3rem;
`;
