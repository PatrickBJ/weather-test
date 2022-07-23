import { clockFormat } from "helpers/timeHelper";

const datesTest = [
  {
    date: new Date(2022, 6, 22, 24, 1),
    time24h: "00:01",
    timeAmPm: "12:01 AM",
  },
  {
    date: new Date(2022, 6, 22, 1, 0),
    time24h: "01:00",
    timeAmPm: "1:00 AM",
  },
  {
    date: new Date(2022, 6, 22, 11, 0),
    time24h: "11:00",
    timeAmPm: "11:00 AM",
  },
  {
    date: new Date(2022, 6, 22, 12, 0),
    time24h: "12:00",
    timeAmPm: "12:00 PM",
  },
  {
    date: new Date(2022, 6, 22, 13, 0),
    time24h: "13:00",
    timeAmPm: "1:00 PM",
  },
  {
    date: new Date(2022, 6, 22, 17, 0),
    time24h: "17:00",
    timeAmPm: "5:00 PM",
  },
  {
    date: new Date(2022, 6, 22, 23, 0),
    time24h: "23:00",
    timeAmPm: "11:00 PM",
  },
  {
    date: new Date(2022, 6, 22, 24, 0),
    time24h: "00:00",
    timeAmPm: "12:00 AM",
  },
];

it("clock format AM/PM", () => {
  const timeFormat = "AM/PM";

  datesTest.forEach(({ date, timeAmPm }) => {
    const result = clockFormat(date, timeFormat);
    expect(result).toEqual(timeAmPm);
  });
});

it("clock format 24h", () => {
  const timeFormat = "24h";

  datesTest.forEach(({ date, time24h }) => {
    const result = clockFormat(date, timeFormat);
    expect(result).toEqual(time24h);
  });
});
