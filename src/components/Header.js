import React from 'react'
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

function Header() {
    return (
        <Container>
            <h1>GYM ROUTINE</h1>
            <FitnessCenterIcon fontSize='medium' />
            <Menu>
                <p>Bench</p>
                <p>Deadlift</p>
                <p>Squat</p>
                <p>Accessories</p>
            </Menu>
            <RightMenu>
                <AccountCircleIcon />
            </RightMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 50px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 100px;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 0.8;
    color: white;

    h1 {
        opacity: 1;
        font-size: x-large;
    }
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    opacity: 1;

    p {
        font-weight: 400;
        padding: 0 25px;
        flex-wrap: no-wrap;
        
    }

    @media(max-width: 768px) {
        display:none;
    }
        cursor: pointer;
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    opacity: 1;
    padding-left: 160px;
    flex-wrap: no-wrap;
    cursor: pointer;
`;
