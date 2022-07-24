import axios from "axios";

const mockTime = new Date().getTime();

/* eslint-disable @typescript-eslint/no-explicit-any */
export const mockApi = (result: any) => {
  axios.get = jest.fn().mockResolvedValueOnce(result);
};

export const mockCityItem = { id: 1, city: "test", lat: 1, lon: 1 };
export const mockLocation = { pathname: "/" };
export const mockLocation7days = { pathname: "/7days" };

export const mockedWeatherDayData = () => ({
  data: {
    cod: 200,
    dt: mockTime,
    weather: [
      {
        main: {
          id: 1,
          description: "description",
          icon: "icon",
        },
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
      sunrise: mockTime,
      sunset: mockTime,
    },
  },
});

export const mockedWeatherWeekData = () => ({
  data: {
    daily: [
      {
        cod: 200,
        dt: mockTime,
        weather: [
          {
            main: {
              id: 1,
              description: "description",
              icon: "icon",
            },
          },
        ],
        temp: {
          day: 1,
          min: 1,
          max: 1,
          feels_like: {
            day: 1,
          },
        },
        humidity: 1,
        sunrise: mockTime,
        sunset: mockTime,
      },
    ],
  },
});
