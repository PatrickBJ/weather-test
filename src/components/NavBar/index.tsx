import Clock from "./Clock";
import SwitchTheme from "./SwitchTheme";
import Search from "./Search";
import styled from "styled-components";
import classNames from "classnames/bind";

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
  return (
    <Header>
      <Clock />
      <NavItems>
        <SwitchTheme />
        <Search />
        <Settings className={classNames("clickable")}>Settings</Settings>
      </NavItems>
    </Header>
  );
}
