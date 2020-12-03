import React, { useState } from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import designLanguage from "../design-language"
import { Footer } from "./Footer"
import { Header } from "./Header"
import GlobalStyle from "../design-language/styles/GlobalStyles"
export default function Container({ children }) {
  let [isDark, setIsDark] = useState(localStorage.getItem("rp/theme"))
  const toggleTheme = () => {
    if (isDark === "dark") {
      localStorage.setItem("rp/theme", "light")
      setIsDark("light")
    } else {
      localStorage.setItem("rp/theme", "dark")
      setIsDark("dark")
    }
  }

  return (
    <ThemeProvider
      theme={isDark === "dark" ? designLanguage.dark : designLanguage.light}
    >
      <GlobalStyle />
      <button onClick={toggleTheme}>Change theme</button>
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
  }
  p {
    color: ${props => props.theme.body.description.foreground};
    font-size: 1rem;
  }
  h2 {
    font-size: 2.2rem;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.body.title.foreground};
  }
  h3 {
    font-size: 1.8rem;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.body.title.foreground};
  }
`
