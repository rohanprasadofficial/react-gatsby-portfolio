import React from "react"
import { SEO } from "../components"
import styled, { ThemeProvider } from "styled-components"
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
        <h2>// recently published</h2>
        <BlogCard />
        <BlogCard />

        <Newsletter />
      </StyledHome>
    </Container>
  )
}

const StyledHome = styled.section``

export default IndexPage
