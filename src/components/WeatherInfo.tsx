import styled from "styled-components";

const Container = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
`;

export default function WeatherInfo() {
  return <Container>Pick a day to see the full forecast</Container>;
}
