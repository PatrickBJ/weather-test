import Clock from './Clock';
import SwitchTheme from './SwitchTheme';
import styled from 'styled-components';

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

const Search = styled.div`
    cursor:pointer;
    align-self: center;
`;

const Settings = styled.div`
    cursor:pointer;
    align-self: center;
`;

export default function NavBar(){

    return(
        <Header>
            <Clock/>
            <NavItems>
                <SwitchTheme/>
                <Search>Search</Search>
                <Settings>Settings</Settings>
            </NavItems>
        </Header>
    );
}