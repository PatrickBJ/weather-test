import styled from "styled-components";
import {
  cities,
  CityItem,
  searchCity,
  selectedCity,
  setSelectedCity,
} from "reducers/citiesSlice";
import { units } from "reducers/settingsSlice";
import { useSelector, useDispatch } from "react-redux";
import { isCitySearched } from "helpers/functionHelper";
import classNames from "classnames/bind";
import { weatherApi } from "api/weather";
import { useLocation } from "react-router-dom";

const Container = styled.section`
  display: grid;
  padding: 10px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const City = styled.div`
  display: grid;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.border};
  cursor: pointer;
  transform: scale(1);
  transition-timing-function: ease;
  transition-duration: 0.6s;
  padding: 2px;
  white-space: nowrap;
  overflow: hidden;
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
  const unit = useSelector(units);
  const dispatch = useDispatch();
  const location = useLocation();

  const selectCity = async (cityItem: CityItem) => {
    dispatch(setSelectedCity(cityItem));
    weatherApi(cityItem, location, unit, dispatch);
  };

  return (
    <Container role="listbox">
      {citiesArray.map(
        (item) =>
          isCitySearched(item.city, searchCityText) && (
            <City
              key={item.id}
              role="option"
              onClick={() => selectCity(item)}
              title={item.city}
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
