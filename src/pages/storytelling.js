import React from "react"
import styled from "styled-components"
import Container from "../components/container"

export default function StoryTelling() {
  return (
    <Container>
      <StyledST>
        <div>
          <h1> {"//"} storytelling & filmmaking ;</h1>
          <h3>“ Those who tell the stories rule the world “</h3>
          <p>
            This quote which describes everything. I am deeply passionate about
            storytelling and frame stories that can change things from better to
            best.
          </p>
          <h3>Concept ;</h3>
          <p>
            I will start filmmaking soon , i am learning the concepts and how
            great people do it. There is something that differentiaite
            storytellers from the normal once. Someday you might see me creating
            great stories.
          </p>
          <p> How it can help people i teach ? </p>
          <p>
            I am polishing the skills and i am looking to combine my coding
            skills with filmmaking to bring something new out of box. stay
            tuned.
          </p>
        </div>
      </StyledST>
    </Container>
  )
}

const StyledST = styled.section`
  h2 {
    margin-top: 0;
  }
  p {
    margin: 1rem 0;
    span {
      color: #00bfa5;
    }
  }
`
