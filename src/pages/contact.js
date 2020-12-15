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
        OR
        <form action="https://formspree.io/f/{form_id}" method="post">
          <label for="name">Your Name</label> <br />
          <input name="Name" id="name" type="text" /> <br />
          <label for="email">Your Email</label> <br />
          <input name="Email" id="email" type="email" /> <br />
          <label for="description">Description</label> <br />
          <textarea
            name="description"
            rows="10"
            placeholder="Your thoughts"
          ></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
      </StyledContact>
    </Container>
  )
}

const StyledContact = styled.section`
  a {
    color: #00bfa5;
  }
  h1 {
    margin: 1rem 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }

  input,
  textarea {
    padding: 0.5rem;
    border-radius: 0.4rem;
    width: 40%;
    padding-left: 1rem;
    border: 1px solid ${props => props.theme.body.title.foreground};
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }

  textarea {
    width: 70%;
  }
  button {
    padding: 0.5rem 1rem;
    background-color: ${props => props.theme.body.title.foreground};
    color: ${props => props.theme.body.background};
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.body.description.foreground};
    font-size: 0.8rem;
  }
  p {
    padding: 0.5rem 0;
  }
`
