import { Routes, Route } from "react-router-dom";
import WeatherDay from "components/WeatherInfo/WeatherDay";
import WeatherWeek from "components/WeatherInfo/WeatherWeek";

export default function WeatherInfoRoute() {
  return (
    <Routes>
      <Route path="*" element={<WeatherDay />}></Route>
      <Route path="/7days" element={<WeatherWeek />}></Route>
    </Routes>
  );
}
