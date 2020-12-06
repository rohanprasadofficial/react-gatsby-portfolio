import React from "react"
import { FaGithub, FaLink, FaSitemap } from "react-icons/fa"
import styled from "styled-components"

export default function ProjectCard() {
  const s = { height: 20, margin: "0.5rem 0.5rem", cursor: "pointer" }

  return (
    <StyledCard>
      <h4>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h4>
      <span>
        <FaLink style={s} />
      </span>
      <span>
        <FaGithub style={s} />
      </span>
      <span>
        <FaSitemap style={s} />
      </span>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </StyledCard>
  )
}

const StyledCard = styled.section`
  max-width: 80%;
  h4 {
    font-size: 1.4rem;
    color: ${props => props.theme.body.title.foreground};
    margin: 1rem 0;
  }
  p {
    margin-bottom: 1rem;
  }
`
