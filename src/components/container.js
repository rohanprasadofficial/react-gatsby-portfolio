import React, { useState } from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import designLanguage from "../design-language"
import { Footer } from "./Footer"
import { Header } from "./Header"
import GlobalStyle from "../design-language/styles/GlobalStyles"
export default function Container({ children }) {
  const [th, setTh] = useState(false)

  return (
    <ThemeProvider theme={th ? designLanguage.dark : designLanguage.light}>
      <GlobalStyle />
      <button onClick={() => setTh(!th)}>Change theme</button>
      <Header />

      <StyledContainer>
        {children}
        <Footer />
      </StyledContainer>
    </ThemeProvider>
  )
}

const StyledContainer = styled.section`
  display: block;
  margin: 1rem auto;
  width: 60%;
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
  h3 {
    font-size: 1.8rem;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.body.title.foreground};
    transition: color 2s ease;
  }
`
