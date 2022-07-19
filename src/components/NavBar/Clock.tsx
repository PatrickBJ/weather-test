import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {clockFormat} from '../../helpers/timeHelper';

const ClockComp = styled.div`
    font-size: 1rem;
`;

const SECOND = 1000;

export default function Clock(){
    const [time, setTime] = useState<Date>(new Date());
    useEffect(()=>{
        setInterval(
            () => setTime(new Date()), 
            SECOND*30
    )},[])

    return(
        <ClockComp>{clockFormat(time,"AM/PM")}</ClockComp>
    );
}