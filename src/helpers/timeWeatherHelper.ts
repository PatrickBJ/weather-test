import { sunsetMinPeriod, sunsetMaxPeriod } from "./constants";

export const isToday = (date: Date) => {
  const today = new Date();

  return (
    today.getFullYear() === date.getFullYear() &&
    today.getMonth() === date.getMonth() &&
    today.getDay() === date.getDay()
  );
};

export const isSunset = (sunrise: Date, sundown: Date) => {
  const now = new Date();
  return (
    Math.abs(sunrise.getTime() - now.getTime()) <= sunsetMinPeriod ||
    Math.abs(sundown.getTime() - now.getTime()) <= sunsetMinPeriod
  );
};

export const isSunrise = (sunrise: Date) => {
  const now = new Date();
  return Math.abs(sunrise.getTime() - now.getTime()) <= sunsetMaxPeriod;
};

export const isSunDown = (sundown: Date) => {
  const now = new Date();
  return Math.abs(sundown.getTime() - now.getTime()) <= sunsetMaxPeriod;
};

export const isNight = (sundown: Date) => {
  const now = new Date();
  return Math.abs(sundown.getTime() - now.getTime()) > sunsetMaxPeriod;
};
