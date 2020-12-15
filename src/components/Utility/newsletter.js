import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function Newsletter() {
  return (
    <StyledNewsletter>
      <h3>tiny information to your inbox</h3>
      <p>
        Random thoughts about design systems , react , angular , design and many
        more.
      </p>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/rohanprasadofficial"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://buttondown.email/rohanprasadofficial', 'popupwindow')"
        class="embeddable-buttondown-form"
      >
        <input
          type="email"
          name="email"
          id="bd-email"
          placeholder="rohan@example.com"
        ></input>
        <input type="hidden" value="1" name="embed"></input>
        <button type="submit" value="Subscribe">
          Subscribe
        </button>
        <p>
          <Link href="https://buttondown.email" target="_blank">
            Powered by Buttondown.
          </Link>
        </p>
      </form>
    </StyledNewsletter>
  )
}

const StyledNewsletter = styled.div`
  margin: 2rem 0;
  background-color: ${props => props.theme.body.card.background};
  max-width: 40rem;
  padding: 1.5rem 2rem;
  border-radius: 0.4rem;

  h3 {
    color: ${props => props.theme.body.title.foreground};
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 1rem;
    color: ${props => props.theme.body.description.foreground};
  }
  input {
    padding: 0.5rem;
    margin-right: 1rem;
    border-radius: 0.4rem;
    width: 40%;
    border: none;
    padding-left: 1rem;
    margin-bottom: 0.3rem;
  }
  button {
    padding: 0.5rem 1rem;
    /* background-color: ${props => props.theme.body.title.foreground};
    color: ${props => props.theme.body.background}; */

    background-color: black;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.body.description.foreground};
    font-size: 0.8rem;
  }
`
