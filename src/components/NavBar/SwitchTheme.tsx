import styled from "styled-components";
import { darkTheme, toggleTheme } from "reducers/settingsSlice";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames/bind";

const SwitchThemeContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Text = styled.p`
  cursor: pointer;
`;

export default function SwitchTheme() {
  const dispatch = useDispatch();

  const isDarkTheme = useSelector(darkTheme);
  const mode = isDarkTheme ? "light" : "dark";

  return (
    <SwitchThemeContainer>
      <Text
        className={classNames("clickable")}
        title={`Switch to ${mode} mode`}
        onClick={() => {
          dispatch(toggleTheme());
        }}
      >
        {isDarkTheme ? "Dark" : "Light"}
      </Text>
    </SwitchThemeContainer>
  );
}
