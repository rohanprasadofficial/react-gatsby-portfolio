import React from "react"
import { SEO } from "../components"
import styled from "styled-components"
import BlogCard from "../components/Utility/BlogCard/BlogCard"
import Newsletter from "../components/Utility/newsletter"
import Container from "../components/container"

const IndexPage = () => {
  return (
    <Container>
      <StyledHome>
        <SEO title="Home" />
        <h1>Hey, I'm Rohan</h1>
        <p>a coder who designs sometimes.</p>

        <h4>builds beautifully creative things @Microsoft </h4>

        <Newsletter />
      </StyledHome>
    </Container>
  )
}

const StyledHome = styled.section`
  h4 {
    margin-top: 1rem;
    font-size: 1.8rem;
    color: ${props => props.theme.body.title.foreground};
  }
`

export default IndexPage
