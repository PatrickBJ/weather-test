import NavBar from './components/NavBar';
import WeatherInfo from './components/WeatherInfo';
import SelectCity from './components/SelectCity';
import { ThemeProvider } from 'styled-components'
import GlobalCSS from './styles/global.css'
import {Theme} from './styles/theme';
import styled from 'styled-components';
import { darkTheme } from './reducers/settingsSlice';
import { useSelector } from "react-redux";

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr;
  width: 100vw;
  height: 100vh;
  background-color: ${({theme})=> theme.body};
  color: ${({theme})=> theme.text};
`;

const InfoContainer = styled.main`
  display: grid;
  grid-template-rows: 1fr 200px;
`;

function App() {

  const isDarkTheme = useSelector(darkTheme);

  return (
    <ThemeProvider theme={Theme(isDarkTheme)}>
      <GlobalCSS />
      <AppContainer>
        <NavBar/>
        <InfoContainer>
          <WeatherInfo></WeatherInfo>
          <SelectCity></SelectCity> 
        </InfoContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
