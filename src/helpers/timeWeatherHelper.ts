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
    Math.abs(time.getTime() - sunrise.getTime()) <= sunsetMinPeriod ||
    Math.abs(time.getTime() - sundown.getTime()) <= sunsetMinPeriod
  );
};

export const isSunrise = (time: Date, sunrise: Date) => {
  return Math.abs(time.getTime() - sunrise.getTime()) <= sunsetMaxPeriod;
};

export const isSunDown = (time: Date, sundown: Date) => {
  return Math.abs(time.getTime() - sundown.getTime()) <= sunsetMaxPeriod;
};

export const isNight = (time: Date, sunrise: Date, sundown: Date) => {
  return !(
    time.getTime() > sunrise.getTime() && time.getTime() < sundown.getTime()
  );
};
