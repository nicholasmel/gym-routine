import React from 'react'
import styled from 'styled-components';
import { Fade } from 'react-reveal';

function Section({ backgroundImg, description, backgroundPosition }) {
  return (
    <Container bg={backgroundImg} ps={backgroundPosition}>
      <Fade top>
        <h1>{description}</h1>
      </Fade>
    </Container >
  )
}

export default Section

const Container = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: ${props => props.ps === "bottom" ? "bottom" : "center"};
  background-repeat: no-repeat;
  height: 30vh;
  width: 100vw;
  overflow: hidden;

  h1 {
    text-align: center;
    padding-top: 28px;
    color: white;
    font-style: italic;
    font-weight: 400;
  }
`