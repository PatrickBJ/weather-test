# weather-test

Weather forecast test with React

## Implementation Details

- Typescript
- Redux toolkit
- Axios
- Roboto font
- Styled-components
- Modal with react-modal
- React-router-dom
- React-hot-toast lib
- Classnames lib
- Created a .env file to store the API_KEY (REACT_APP_API_KEY)
- For api calls I used two endpoints.
  - weather endpoint for the day/now (default "/" url)
  - onecall endpoint for week ("/7days" url)
  - I noticed that for the different api calls there are differences in the weather forecast for today comparing to the one call endpoint

## Extra functionalities

- Added light/dark mode support
- Unit tests (Jest and RTL)
  - api
  - modal
  - search input
  - switch theme
  - select city
  - routes
  - weather info
- Remove cells from the grid as the user types on the search bar
- Added some animations
- Added toasts to save settings and weather api error
- Added loading mode with '?' icon

## Icons weather logic

- One day mode
  - If weather is night: Purple color (Night is if the time of now is not between sunrise and sunset)
  - If weather is clear and the time of now is around 3 minutes from sunrise or sundown the icon is sunset (yellow)
  - If weather is clear and the time of now is around 15 minutes from sunrise the icon is sunrise (yellow)
  - If weather is clear and the time of now is around 15 minutes from sundown the icon is sundown (yellow)
  - If weather is clear and it is not night the icon is sun (yellow)
  - If weather is clear and is night the icon is night and the color is purple
  - For other weather forecast it is blue for day and purple for night
- Week mode
  - If is today use the same logic above
  - If is the other 6 days the color is Cyan
