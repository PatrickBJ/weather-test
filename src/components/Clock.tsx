import styled from "styled-components";
import { clockFormat } from "helpers/timeHelper";
import { time, timeFormat } from "reducers/settingsSlice";
import { useSelector } from "react-redux";

const ClockComp = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

export default function Clock() {
  const timeFormatValue = useSelector(timeFormat);
  const timeClock = new Date(useSelector(time));

  return (
    <ClockComp data-testid="clock">
      {clockFormat(timeClock, timeFormatValue)}
    </ClockComp>
  );
}
