import styled from "styled-components";
import {
  searchCity,
  selectedCity,
  setSelectedCity,
  cities,
} from "reducers/citiesSlice";
import { useSelector, useDispatch } from "react-redux";
import { isCitySearched } from "helpers/functionHelper";
import classNames from "classnames/bind";

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
  :hover,
  &.selected {
    border: none;
    background-color: ${({ theme }) => theme.hoverBody};
    color: ${({ theme }) => theme.hoverText};
    transform: scale(0.95);
  }
`;

export default function SelectCity() {
  const citiesArray = useSelector(cities);
  const searchCityText = useSelector(searchCity);
  const selectedCityText = useSelector(selectedCity);
  const dispatch = useDispatch();

  return (
    <Container>
      {citiesArray.map(
        (item) =>
          isCitySearched(item.city, searchCityText) && (
            <City
              key={item.id}
              onClick={() => dispatch(setSelectedCity(item))}
              className={classNames({
                selected: selectedCityText?.id === item.id,
              })}
            >
              {item.city}
            </City>
          )
      )}
    </Container>
  );
}
