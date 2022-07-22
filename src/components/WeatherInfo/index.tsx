import styled from "styled-components";
import SelectButton from "components/Buttons/SelectButton";
import { useDispatch, useSelector } from "react-redux";
import { selectedCity } from "reducers/citiesSlice";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import WeatherDay from "components/WeatherInfo/WeatherDay";
import WeatherWeek from "components/WeatherInfo/WeatherWeek";
import { isOneDay } from "helpers/functionHelper";
import { weatherApi } from "api/weather";
import { units } from "reducers/settingsSlice";

const WeatherEmptyContainer = styled.section`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const WeatherContainer = styled.section`
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

const City = styled.p`
  align-self: center;
  text-align: center;
  font-size: 1.3rem;
`;

export default function WeatherInfo() {
  const selectedCityObj = useSelector(selectedCity);
  const navigate = useNavigate();
  const location = useLocation();
  const unit = useSelector(units);
  const dispatch = useDispatch();

  const changeForecast = async (item: string) => {
    if (item === "7 Days" && isOneDay(location)) {
      navigate("/7days");
      if (selectedCityObj)
        await weatherApi(
          selectedCityObj,
          { pathname: "/7days" },
          unit,
          dispatch
        );
    } else if (item !== "7 Days" && !isOneDay(location)) {
      navigate("/");
      if (selectedCityObj)
        await weatherApi(selectedCityObj, { pathname: "/" }, unit, dispatch);
    }
  };

  if (!selectedCityObj)
    return (
      <WeatherEmptyContainer>
        Pick a day to see the full forecast
      </WeatherEmptyContainer>
    );

  return (
    <WeatherContainer>
      <City>{selectedCityObj.city}</City>
      <Routes>
        <Route path="*" element={<WeatherDay />}></Route>
        <Route path="/7days" element={<WeatherWeek />}></Route>
      </Routes>
      <SelectButton
        selected={isOneDay(location) ? "Now" : "7 Days"}
        setSelected={changeForecast}
        options={["Now", "7 Days"]}
        height={23}
      >
        Forecast
      </SelectButton>
    </WeatherContainer>
  );
}
