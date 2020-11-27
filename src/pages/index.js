import React from "react"
import { Layout, SEO } from "../components"
import GlobalStyle from "../design-language/styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import designLanguage from "../design-language"
import Experience from "./experience"
import { useState } from "react"
// const theme = { red: "#EB455A", blue: "#3793E0" }

const IndexPage = () => {
  const [th, setTh] = useState(true)

  return (
    <ThemeProvider theme={th ? designLanguage.dark : designLanguage.light}>
      <GlobalStyle />
      <button onClick={() => setTh(!th)}>Change theme</button>
      <Layout>
        <SEO title="Home" />
      </Layout>
      <Experience />
    </ThemeProvider>
  )
}

export default IndexPage
