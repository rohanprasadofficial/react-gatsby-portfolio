import React from "react"
import { SEO } from "../components"
import styled from "styled-components"
import Newsletter from "../components/Utility/newsletter"
import Container from "../components/container"
import Social from "../components/Utility/social"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Container>
      <StyledHome>
        <SEO title="Home" />
        <h1>Hey, I'm Rohan</h1>
        <p>a coder who designs sometimes.</p>

        <h4>builds beautifully creative things @Microsoft </h4>
        <div>
          <Link to="/experience">
            <span>‣ some experiences</span>
          </Link>
          <Link to="/creative">
            <span>‣ creative stuffs</span>
          </Link>
          <Link to="/storytelling">
            <span>‣ storytelling</span>
          </Link>
        </div>

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

  div {
    margin: 1rem 0;
    a {
      text-decoration: none;
      span {
        margin-right: 2rem;

        color: ${props => props.theme.body.title.foreground};
      }
    }
  }

  @media only screen and (max-width: 768px) {
    div {
      a {
        display: block;
        margin: 1rem 0;
      }
    }
  }
`

export default IndexPage
