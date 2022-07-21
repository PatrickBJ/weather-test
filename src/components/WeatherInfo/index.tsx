import styled from "styled-components";
import SelectButton from "components/Buttons/SelectButton";
import { useSelector } from "react-redux";
import { selectedCity } from "reducers/citiesSlice";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

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

  const changeForecast = (item: string) => {
    if (item === "7 Days") navigate("/7days");
    else navigate("/");
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
      <Outlet />
      <SelectButton
        selected={location?.pathname === "/7days" ? "7 Days" : "Now"}
        setSelected={changeForecast}
        options={["Now", "7 Days"]}
        height={23}
      >
        Forecast
      </SelectButton>
    </WeatherContainer>
  );
}
