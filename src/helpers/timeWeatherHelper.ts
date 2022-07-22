import { sunsetMinPeriod, sunsetMaxPeriod } from "./constants";

export const isToday = (time: Date, date: Date) => {
  return (
    time.getFullYear() === date.getFullYear() &&
    time.getMonth() === date.getMonth() &&
    time.getDay() === date.getDay()
  );
};

export const isSunset = (time: Date, sunrise: Date, sundown: Date) => {
  return (
    Math.abs(sunrise.getTime() - time.getTime()) <= sunsetMinPeriod ||
    Math.abs(sundown.getTime() - time.getTime()) <= sunsetMinPeriod
  );
};

export const isSunrise = (time: Date, sunrise: Date) => {
  return Math.abs(sunrise.getTime() - time.getTime()) <= sunsetMaxPeriod;
};

export const isSunDown = (time: Date, sundown: Date) => {
  return Math.abs(sundown.getTime() - time.getTime()) <= sunsetMaxPeriod;
};

export const isNight = (time: Date, sundown: Date) => {
  return Math.floor(time.getTime() - sundown.getTime()) > sunsetMaxPeriod;
};
