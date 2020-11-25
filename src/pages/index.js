import React from "react"
import { Layout, SEO } from "../components"
import GlobalStyle from "../design-language/styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import designLanguage from "../design-language"

// const theme = { red: "#EB455A", blue: "#3793E0" }

const IndexPage = () => (
  <ThemeProvider theme={designLanguage}>
    <GlobalStyle />
    <Layout>
      <SEO title="Home" />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
