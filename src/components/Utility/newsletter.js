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
      <div>
        <input aria-label="input" placeholder="rohan@example.com" />
        <button>subscribe</button>
      </div>
    </StyledNewsletter>
  )
}

const StyledNewsletter = styled.div`
  padding: 2rem 0;
  margin: 2rem 0;
  background-color: ${props => props.theme.body.card.background};
  max-width: 40rem;
  padding: 2rem;
  h3 {
    color: ${props => props.theme.body.title.foreground};
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
  p {
    margin-bottom: 1rem;
    color: ${props => props.theme.body.description.foreground};
  }
  input {
    padding: 0.5rem;
    margin-right: 1rem;
  }
  button {
    padding: 0.5rem 1rem;
    color: ${props => props.theme.body.icon.foreground};
    background-color: ${props => props.theme.body.icon.background};
    box-sizing: border-box;
    border: 0.5px solid ${props => props.theme.body.icon.foreground};
    cursor: pointer;
  }
`
