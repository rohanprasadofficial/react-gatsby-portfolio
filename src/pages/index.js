import React from "react"
import { SEO } from "../components"
import styled from "styled-components"
import Newsletter from "../components/Utility/newsletter"
import Container from "../components/container"
import Social from "../components/Utility/social"

const IndexPage = () => {
  return (
    <Container>
      <StyledHome>
        <SEO title="Home" />
        <h1>Hey, I'm Rohan</h1>
        <p>a coder who designs sometimes.</p>

        <h4>builds beautifully creative things @Microsoft </h4>

        <Newsletter />
        <Social />
      </StyledHome>
    </Container>
  )
}

const StyledHome = styled.section`
  h1 {
    margin: 1rem 0;
  }
  h2 {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
  }
  h4 {
    margin-top: 1rem;
  }
`

export default IndexPage
