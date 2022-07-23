import { useState } from "react";
import {
  searchCity,
  cities,
  setSearchCity,
  selectSearchCity,
} from "reducers/citiesSlice";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames/bind";

import { units } from "reducers/settingsSlice";
import { useLocation } from "react-router-dom";
import { weatherApi } from "api/weather";
import { findCity } from "helpers/functionHelper";
import {
  SearchContainer,
  SearchCity,
  SearchInput,
  CloseButton,
  SearchText,
} from "./Search.style";

export default function Search() {
  const [searchMode, setSearchMode] = useState(false);
  const dispatch = useDispatch();
  const searchCityText = useSelector(searchCity);
  const citiesArray = useSelector(cities);
  const unit = useSelector(units);
  const location = useLocation();

  const handleClearText = () => {
    dispatch(setSearchCity(""));
    setSearchMode(false);
  };

  const handleSelectCity = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(selectSearchCity());
      const cityItem = findCity(citiesArray, searchCityText);
      weatherApi(cityItem, location, unit, dispatch);
    }
  };

  const handleResetSearchMode = () => {
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
            onKeyDown={(e) => handleSelectCity(e)}
            onBlur={handleResetSearchMode}
          ></SearchInput>
          {Boolean(searchCityText) && <CloseButton onClick={handleClearText} />}
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
