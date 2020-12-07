import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { SEO } from "../components"
import Container from "../components/container"

const NotFoundPage = () => (
  <Container>
    <SEO title="404 | Not found" />
    <StyledNG>
      <h1>{"//"} 404 , Sorry . you’re lost</h1>
      <div>
        <Link to="/"> [ return to home ] </Link>
      </div>
    </StyledNG>
  </Container>
)

const StyledNG = styled.section`
  h1 {
    text-align: center;
  }
  div {
    text-align: center;
    a {
      color: #00bfa5;
    }
  }
`

export default NotFoundPage
