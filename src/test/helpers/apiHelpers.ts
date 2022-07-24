import axios from "axios";

const mockTime = new Date().getTime();

/* eslint-disable @typescript-eslint/no-explicit-any */
export const mockApi = (result: any) => {
  axios.get = jest.fn().mockResolvedValueOnce(result);
};

export const mockCityItem = { id: 1, city: "test", lat: 1, lon: 1 };
export const mockLocation = { pathname: "/" };
export const mockLocation7days = { pathname: "/7days" };

const monday = new Date(2022, 6, 18, 10).getTime();
const sunset = new Date(2022, 6, 18, 18).getTime();
const sunrise = new Date(2022, 6, 18, 6).getTime();

export const mockedWeatherDayData = () => ({
  data: {
    cod: 200,
    dt: monday,
    weather: [
      {
        main: "clear",
        id: 1,
        description: "description",
        icon: "01d",
      },
    ],
    main: {
      temp: 1,
      temp_min: 1,
      temp_max: 1,
      feels_like: 1,
      humidity: 1,
    },
    sys: {
      sunrise,
      sunset,
    },
  },
});

export const mockedWeatherWeekData = () => ({
  data: {
    daily: [
      {
        dt: mockTime,
        weather: [
          {
            main: "cloud",
            id: 1,
            description: "description",
            icon: "icon",
          },
        ],
        temp: {
          day: 10,
          min: 20,
          max: 30,
          feels_like: {
            day: 40,
          },
        },
        humidity: 50,
        sunrise: mockTime,
        sunset: mockTime,
      },
    ],
  },
});

const daysOfWeek = [
  new Date(2022, 6, 18, 10).getTime(),
  new Date(2022, 6, 19, 10).getTime(),
  new Date(2022, 6, 20, 10).getTime(),
  new Date(2022, 6, 21, 10).getTime(),
  new Date(2022, 6, 22, 10).getTime(),
  new Date(2022, 6, 23, 10).getTime(),
  new Date(2022, 6, 24, 10).getTime(),
];

export const mockedWeatherAllDays = () => ({
  data: {
    daily: [
      {
        dt: daysOfWeek[0],
        weather: [{ main: "cloud 1", icon: "03d" }],
        sunrise: daysOfWeek[0],
        sunset: daysOfWeek[0],
      },
      {
        dt: daysOfWeek[1],
        weather: [{ main: "cloud 2", icon: "03d" }],
        sunrise: daysOfWeek[1],
        sunset: daysOfWeek[1],
      },
      {
        dt: daysOfWeek[2],
        weather: [{ main: "cloud 3", icon: "03d" }],
        sunrise: daysOfWeek[2],
        sunset: daysOfWeek[2],
      },
      {
        dt: daysOfWeek[3],
        weather: [{ main: "cloud 4", icon: "03d" }],
        sunrise: daysOfWeek[3],
        sunset: daysOfWeek[3],
      },
      {
        dt: daysOfWeek[4],
        weather: [{ main: "cloud 5", icon: "03d" }],
        sunrise: daysOfWeek[4],
        sunset: daysOfWeek[4],
      },
      {
        dt: daysOfWeek[5],
        weather: [{ main: "cloud 6", icon: "03d" }],
        sunrise: daysOfWeek[5],
        sunset: daysOfWeek[5],
      },
      {
        dt: daysOfWeek[6],
        weather: [{ main: "cloud 7", icon: "03d" }],
        sunrise: daysOfWeek[6],
        sunset: daysOfWeek[6],
      },
    ],
  },
});
