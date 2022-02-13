import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

function CardRight({ exerciseImage, exercise, tipOne, tipTwo, tipThree, tipFour }) {
    return (
        <Container>
            <Workout>
                <Fade bottom>
                    <Description>
                        <h2>{exercise}</h2>
                        <p>{tipOne}</p>
                        <p>{tipTwo}</p>
                        <p>{tipThree}</p>
                        <p>{tipFour}</p>
                    </Description>
                </Fade>
                <Fade bottom>
                    <Exercise>
                        <img src={exerciseImage} alt="" />
                    </Exercise>
                </Fade>
            </Workout>
        </Container>

    )
}

export default CardRight

const Container = styled.div`
    height: auto;
    width: 100vw;
    background-color: #111111;
    overflow: hidden;
    
    h1 {
        text-align: center;
        color: white;
    }
`

const Workout = styled.div`
    height: auto;
    width: auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    background-color: #111111;
`
const Exercise = styled.div`
    height: 40vh;
    width: 40vw;
    overflow: hidden;
    text-align: center;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;

        @media screen and (max-width: 600px){
            display: none;
        }
    }
`

const Description = styled.div`
    height: 40vh;
    width: 40vw;
    overflow: hidden;
    text-align: center;
    margin-right: 80px;

    h2 {
        color: #eeeeee;
        padding-top: 10px;
        font-weight: 350;
    }
    p {
        color: #bebebe;
        text-align: middle;
        font-style: italic;
    }

    @media screen and (max-width: 600px){
        margin-left: 55vw;
    }
`

