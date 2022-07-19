import Clock from './Clock';
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

const SwitchTheme = styled.div`
    cursor:pointer;
`;

const Search = styled.div`
    cursor:pointer;
`;

const Settings = styled.div`
    cursor:pointer;
`;

interface props {
    darkTheme: boolean;
    // setDarkTheme: (theme: boolean) => boolean;
}

export default function NavBar({darkTheme}: props){

    return(
        <Header>
            <Clock></Clock>
            <NavItems>
                <SwitchTheme
                    // onClick={()=>{setDarkTheme((theme: boolean) => !theme)}}
                    >{darkTheme ? 'Dark':'Light'}</SwitchTheme>
                <Search>Search</Search>
                <Settings>Settings</Settings>
            </NavItems>
        </Header>
    );
}