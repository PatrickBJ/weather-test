import SelectButton from "components/Buttons/SelectButton";
import { useDispatch, useSelector } from "react-redux";
import { selectedCity, loading } from "reducers/citiesSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { isOneDay } from "helpers/functionHelper";
import { weatherApi } from "api/weather";
import { units } from "reducers/settingsSlice";
import {
  WeatherEmptyContainer,
  WeatherContainer,
  City,
} from "./WeatherInfo.style";
import WeatherInfoRoute from "./WeatherInfoRoute";

export default function WeatherInfo() {
  const selectedCityItem = useSelector(selectedCity);
  const navigate = useNavigate();
  const location = useLocation();
  const unit = useSelector(units);
  const isLoading = useSelector(loading);
  const dispatch = useDispatch();

  const handleChangeForecast = async (item: string) => {
    if (item === "7 Days" && isOneDay(location)) {
      navigate("/7days");
      weatherApi(selectedCityItem, { pathname: "/7days" }, unit, dispatch);
    } else if (item !== "7 Days" && !isOneDay(location)) {
      navigate("/");
      weatherApi(selectedCityItem, { pathname: "/" }, unit, dispatch);
    }
  };

  if (!selectedCityItem)
    return (
      <WeatherEmptyContainer>
        Pick a day to see the full forecast
      </WeatherEmptyContainer>
    );

  const cityName = isLoading ? "..." : selectedCityItem.city;
  const selected = isOneDay(location) ? "Now" : "7 Days";
  const options = ["Now", "7 Days"];

  return (
    <WeatherContainer>
      <City>{cityName}</City>
      <WeatherInfoRoute />
      <SelectButton
        selected={selected}
        setSelected={handleChangeForecast}
        options={options}
        height={23}
      >
        Forecast
      </SelectButton>
    </WeatherContainer>
  );
}
