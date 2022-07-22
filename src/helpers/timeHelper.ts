import { DayOfWeek } from "./constants";

export const clockFormat = (time: Date | string, typeFormat: string) => {
  const timeDate = typeof time === "string" ? new Date(time) : time;
  const hour = timeDate.getHours();
  let hourFormatted = hour.toString().padStart(2, "0");
  const minutes = timeDate.getMinutes().toString().padStart(2, "0");
  let suffix = "";

  if (typeFormat === "AM/PM") {
    suffix = hour > 12 ? " PM" : " AM";
    hourFormatted = (hour > 12 ? hour - 12 : hour).toString();
  } else if (hour === 0) hourFormatted = "24";

  return `${hourFormatted}:${minutes}` + suffix;
};

export const epochToDayOfWeek = (time: unknown) => {
  let dateString = "";
  if (time) {
    try {
      const timeToNumber = Number(time);
      const date = new Date(timeToNumber * 1000);
      dateString = DayOfWeek[date.getDay()];
    } catch {}
  }
  return dateString;
};

export const epochToDateString = (time: unknown) => {
  let dateString = "";
  if (time) {
    try {
      const timeToNumber = Number(time);
      dateString = new Date(timeToNumber * 1000).toISOString();
    } catch {}
  }
  return dateString;
};

export const dateToEpoch = (date: Date) => {
  let time = null;
  if (date) {
    try {
      const dateTime = date.getTime();
      time = dateTime / 1000;
    } catch {}
  }
  return time;
};

const getMonday = (date: Date) => {
  const day = date.getDay() || 7;
  if (day !== 1) date.setHours(-24 * (day - 1));
  return date;
};

export const getDaysWeek = (date: Date) => {
  const monday = getMonday(date);
  const days = [];

  for (let d = 0; d < 7; d++) {
    const date = new Date(monday);
    date.setDate(date.getDate() + d);
    days.push(date);
  }
  return days;
};
