import Clock from "../Clock";
import SwitchTheme from "./SwitchTheme";
import Search from "./Search";
import styled from "styled-components";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";
import { openModal } from "reducers/settingsSlice";

const Header = styled.header`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavItems = styled.nav`
  display: flex;
  gap: 10px;
`;

const Settings = styled.div`
  cursor: pointer;
  align-self: center;
`;

export default function NavBar() {
  const dispatch = useDispatch();

  const handleCloseModal = () => dispatch(openModal());

  return (
    <Header>
      <Clock />
      <NavItems>
        <SwitchTheme />
        <Search />
        <Settings
          className={classNames("clickable")}
          onClick={handleCloseModal}
        >
          Settings
        </Settings>
      </NavItems>
    </Header>
  );
}
