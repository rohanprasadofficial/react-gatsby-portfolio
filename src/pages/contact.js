import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Header } from "../components"
import Social from "../components/Utility/Social/social"

export default function Contact() {
  return (
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
  )
}

const StyledContact = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 50%;
  margin: 1rem auto;
  height: 75vh;
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
