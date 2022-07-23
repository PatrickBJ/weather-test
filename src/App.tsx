import NavBar from "./components/NavBar";
import WeatherInfo from "./components/WeatherInfo";
import SelectCity from "./components/SelectCity";
import { ThemeProvider } from "styled-components";
import GlobalCSS from "./styles/global.css";
import { Theme } from "./styles/theme";
import { darkTheme, modalOpen, setTime } from "./reducers/settingsSlice";
import { useDispatch, useSelector } from "react-redux";
import ModalSettings from "./components/ModalSettings";
import classNames from "classnames/bind";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { second } from "helpers/constants";
import { AppContainer, InfoContainer } from "./App.style";

export default function App() {
  const isDarkTheme = useSelector(darkTheme);
  const isModalOpen = useSelector(modalOpen);

  // Time change control
  const dispatch = useDispatch();
  useEffect(() => {
    setInterval(() => dispatch(setTime(new Date().getTime())), second * 30);
  }, []);

  return (
    <ThemeProvider theme={Theme(isDarkTheme)}>
      <GlobalCSS />
      <AppContainer className={classNames({ appBlur: isModalOpen })}>
        <NavBar />
        <InfoContainer>
          <WeatherInfo />
          <SelectCity></SelectCity>
        </InfoContainer>
        <ModalSettings />
      </AppContainer>
      <Toaster position="top-center" reverseOrder={true} />
    </ThemeProvider>
  );
}
