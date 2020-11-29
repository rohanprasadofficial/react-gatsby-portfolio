import React from "react"
import { Layout, SEO } from "../components"
import GlobalStyle from "../design-language/styles/GlobalStyles"
import styled, { ThemeProvider } from "styled-components"
import designLanguage from "../design-language"
import Experience from "./experience"
import { useState } from "react"
import BlogCard from "../components/Utility/BlogCard/BlogCard"
import Newsletter from "../components/Utility/newsletter"
// const theme = { red: "#EB455A", blue: "#3793E0" }

const IndexPage = () => {
  const [th, setTh] = useState(false)

  return (
    <ThemeProvider theme={th ? designLanguage.dark : designLanguage.light}>
      <GlobalStyle />
      <button onClick={() => setTh(!th)}>Change theme</button>
      <SEO title="Home" />
      <StyledHome>
        <h1>Hey, I'm Rohan</h1>
        <p>a coder who designs sometimes.</p>
        <h2>// recently published</h2>
        <BlogCard />
        <Newsletter />
      </StyledHome>
    </ThemeProvider>
  )
}

const StyledHome = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 60%;
  margin: 1rem auto;
  height: 70vh;
  h1 {
    font-size: 3rem;
    color: ${props => props.theme.body.title.foreground};
    margin: 1rem 0;
    transition: color 2s ease;
  }
  p {
    color: ${props => props.theme.body.description.foreground};
    font-size: 1rem;
    transition: color 2s ease;
  }
  h2 {
    font-size: 2.2rem;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.body.title.foreground};
    transition: color 2s ease;
  }
`

export default IndexPage
