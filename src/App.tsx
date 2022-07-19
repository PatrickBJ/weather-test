import {useState} from 'react';
import NavBar from './components/NavBar';
import WeatherInfo from './components/WeatherInfo';
import SelectCity from './components/SelectCity';
import { ThemeProvider } from 'styled-components'
import GlobalCSS from './styles/global.css'
import {Theme} from './styles/theme';
import styled from 'styled-components';

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

  const [darkTheme] = useState(true)

  return (
    <ThemeProvider theme={Theme(darkTheme)}>
      <GlobalCSS />
      <AppContainer>
        <NavBar darkTheme={darkTheme}/>
        <InfoContainer>
          <WeatherInfo></WeatherInfo>
          <SelectCity></SelectCity> 
        </InfoContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
