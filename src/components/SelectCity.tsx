import styled from "styled-components";
import { cities } from "../reducers/citiesSlice";
import { useSelector } from "react-redux";

const Container = styled.section`
  display: grid;
  padding: 10px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const City = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.border};
  cursor: pointer;
  transform: scale(1);
  transition-timing-function: ease;
  transition-duration: 0.6s;
  :hover {
    border: none;
    background-color: ${({ theme }) => theme.hoverBody};
    color: ${({ theme }) => theme.hoverText};
    transform: scale(0.95);
  }
`;

export default function SelectCity() {
  const citiesArray: string[] = useSelector(cities);

  return (
    <Container>
      {citiesArray.map((city, index) => (
        <City key={index}>{city}</City>
      ))}
    </Container>
  );
}
