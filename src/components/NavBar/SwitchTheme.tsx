import styled from 'styled-components';
import { darkTheme, toggleTheme } from '../../reducers/settingsSlice';
import { useSelector, useDispatch } from "react-redux";

const SwitchThemeContainer = styled.div`
    display: flex;
    gap: 5px;
`;

const Text = styled.p`
    cursor: pointer;
`;

export default function SwitchTheme(){
    const dispatch = useDispatch();

    const isDarkTheme = useSelector(darkTheme);

    return(
        <SwitchThemeContainer>
            <Text 
                onClick={()=>{dispatch(toggleTheme())}}>
                {isDarkTheme ? 'Light':'Dark'}
            </Text>
        </SwitchThemeContainer>
    );
}