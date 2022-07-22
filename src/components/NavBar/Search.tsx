import { useState } from "react";
import styled from "styled-components";
import {
  searchCity,
  cities,
  setSearchCity,
  selectSearchCity,
} from "reducers/citiesSlice";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { ReactComponent as CloseIcon } from "assets/close-circle.svg";
import { units } from "reducers/settingsSlice";
import { useLocation } from "react-router-dom";
import { weatherApi } from "api/weather";
import { findCity } from "helpers/functionHelper";

const SearchContainer = styled.div`
  display: flex;
  justify-self: end;
  justify-items: center;
  align-items: center;
  gap: 10px;
`;

const SearchCity = styled.div`
  position: relative;

  & > svg {
    position: absolute;
    top: -1px;
    right: 3px;
  }
`;

const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.border};
  outline: none;
  text-indent: 5px;
  transition: all 1s;
  transition-timing-function: ease;
`;

const CloseButton = styled(CloseIcon).attrs({ className: "clickable" })`
  width: 14px;
  filter: ${({ theme }) => theme.filter};
  padding: 0;
  margin: 0;
`;

const SearchText = styled.p``;

export default function Search() {
  const [searchMode, setSearchMode] = useState(false);
  const dispatch = useDispatch();
  const searchCityText = useSelector(searchCity);
  const citiesArray = useSelector(cities);
  const unit = useSelector(units);
  const location = useLocation();

  const clearText = () => {
    dispatch(setSearchCity(""));
    setSearchMode(false);
  };

  const selectCity = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(selectSearchCity());
      const cityItem = findCity(citiesArray, searchCityText);
      weatherApi(cityItem, location, unit, dispatch);
    }
  };

  const resetSearchMode = () => {
    if (!searchCityText) setSearchMode(false);
  };

  return (
    <SearchContainer>
      {searchMode && (
        <SearchCity>
          <SearchInput
            autoFocus
            placeholder="Search"
            onChange={(e) => dispatch(setSearchCity(e.target.value))}
            value={searchCityText}
            onKeyDown={(e) => selectCity(e)}
            onBlur={() => resetSearchMode()}
          ></SearchInput>
          {Boolean(searchCityText) && (
            <CloseButton onClick={() => clearText()} />
          )}
        </SearchCity>
      )}
      {!searchMode && (
        <SearchText
          className={classNames("clickable")}
          onClick={() => setSearchMode(true)}
        >
          Search
        </SearchText>
      )}
    </SearchContainer>
  );
}
