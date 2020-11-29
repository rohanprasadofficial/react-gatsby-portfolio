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
        <input />
        <button>subscribe</button>
      </div>
    </StyledNewsletter>
  )
}

const StyledNewsletter = styled.div`
  background-color: blanchedalmond;
`
