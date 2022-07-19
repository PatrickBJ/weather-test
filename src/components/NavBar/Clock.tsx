import { useState, useEffect } from "react";
import styled from "styled-components";
import { clockFormat } from "helpers/timeHelper";
import { timeFormat } from "reducers/settingsSlice";
import { useSelector } from "react-redux";

const ClockComp = styled.div`
  font-size: 1rem;
`;

const SECOND = 1000;

export default function Clock() {
  const timeFormatValue = useSelector(timeFormat);
  const [time, setTime] = useState<Date>(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), SECOND * 30);
  }, []);

  return <ClockComp>{clockFormat(time, timeFormatValue)}</ClockComp>;
}
