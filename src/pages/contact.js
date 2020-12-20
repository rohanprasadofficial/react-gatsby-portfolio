import React, { useState } from "react"
import styled from "styled-components"
import { SEO } from "../components"
import Container from "../components/container"
export default function Contact() {
  const [status, setStatus] = useState("")

  const submitForm = ev => {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus("SUCCESS")
      } else {
        console.log(xhr)
        setStatus("ERROR")
      }
    }
    xhr.send(data)
  }

  return (
    <Container>
      <SEO title="Contact" />

      <StyledContact>
        <h2>let’s collaborate</h2>
        <p>
          For anything , please reach out to :{" "}
          <span>rohanpd.work@gmail.com </span>{" "}
        </p>
        <p>
          Please follow while reaching out :{" "}
          <span>
            <a
              href="https://sbmueller.github.io/nohello/"
              target="_blank"
              rel="noreferrer"
            >
              [ LINK ]
            </a>
          </span>
        </p>
        <h3>OR</h3>
        <form
          onSubmit={submitForm}
          action="https://formspree.io/f/mqkgyjek"
          method="POST"
        >
          <label htmlFor="name">Your Name</label> <br />
          <input
            name="Name"
            id="name"
            type="text"
            placeholder="Rohan Prasad"
          />{" "}
          <br />
          <label htmlFor="email">Your Email</label> <br />
          <input
            name="Email"
            id="email"
            type="email"
            placeholder="rohan@example.com"
          />{" "}
          <br />
          <label htmlFor="description">Description</label> <br />
          <textarea
            name="description"
            rows="10"
            placeholder="Your thoughts"
          ></textarea>
          <br />
          {status === "SUCCESS" ? (
            <p>Thanks! I will get back to you soon.</p>
          ) : (
            <button type="submit">Submit</button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </StyledContact>
    </Container>
  )
}

const StyledContact = styled.section`
  h2 {
    margin-bottom: 1rem;
  }
  h3 {
    margin: 2rem 0;
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
  label {
    color: ${props => props.theme.body.subtitle.foreground};
  }

  textarea {
    width: 70%;
  }
  button {
    padding: 0.75rem 3rem;
    background-color: ${props => props.theme.body.title.foreground};
    color: ${props => props.theme.body.background};
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
  }
  a {
    text-decoration: none;
    color: #00bfa5;
  }

  @media only screen and (max-width: 480px) {
    input {
      width: 70%;
    }
    textarea {
      width: 90%;
    }
  }
`
