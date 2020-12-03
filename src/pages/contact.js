import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { SEO } from "../components"
import Container from "../components/container"
export default function Contact() {
  return (
    <Container>
      <SEO title="Contact" />

      <StyledContact>
        <h1>let’s collaborate</h1>
        <p>
          For anything , please reach out to :{" "}
          <span>rohanpd.work@gmail.com </span>{" "}
        </p>

        <p>
          Please follow while reaching out :{" "}
          <span>
            <Link to="https://sbmueller.github.io/nohello/" target="blank">
              [ LINK ]
            </Link>
          </span>
        </p>
      </StyledContact>
    </Container>
  )
}

const StyledContact = styled.section`
  a {
    color: #00bfa5;
  }
  h1 {
    font-size: 3rem;
    color: ${props => props.theme.body.title.foreground};
    margin: 1rem 0;
    transition: color 2s ease;
    margin-bottom: 1rem;
  }
  p {
    color: ${props => props.theme.body.description.foreground};
    font-size: 1rem;
    transition: color 2s ease;
    margin-bottom: 1rem;
  }
`
