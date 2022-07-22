import NavBar from "./components/NavBar";
import WeatherInfo from "./components/WeatherInfo";
import SelectCity from "./components/SelectCity";
import styled, { ThemeProvider } from "styled-components";
import GlobalCSS from "./styles/global.css";
import { Theme } from "./styles/theme";
import { darkTheme, modalOpen, setTime } from "./reducers/settingsSlice";
import { useDispatch, useSelector } from "react-redux";
import ModalSettings from "./components/modalSettings";
import classNames from "classnames/bind";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { second } from "helpers/constants";

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  min-width: 300px;
  min-height: 500px;
`;

const InfoContainer = styled.main`
  display: grid;
  grid-template-rows: 1fr 200px;
`;

function App() {
  const isDarkTheme = useSelector(darkTheme);
  const isModalOpen = useSelector(modalOpen);

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

export default App;
