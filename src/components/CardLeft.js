import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

function CardLeft({ exerciseImage, exercise, tipOne, tipTwo, tipThree, tipFour }) {
    return (
        <Container>
            <Workout>
                <Fade bottom>
                    <Exercise>
                        <img src={exerciseImage} alt="" />
                    </Exercise>
                </Fade>
                <Fade bottom>
                    <Description>
                        <h2>{exercise}</h2>
                        <p>{tipOne}</p>
                        <p>{tipTwo}</p>
                        <p>{tipThree}</p>
                        <p>{tipFour}</p>
                    </Description>
                </Fade>
            </Workout>
        </Container>

    )
}

export default CardLeft

const Container = styled.div`
    height: auto;
    width: 100vw;
    background-color: #111111;
    overflow: hidden;
    padding-top: 20px;
    padding-bottom: 20px;
    
    h1 {
        text-align: center;
        color: f1f1f1;
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
    margin-right: 80px;

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
    background-color: #111111;

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
        margin-right: 55vw;
    }
`

