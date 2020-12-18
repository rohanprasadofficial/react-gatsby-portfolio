import React from "react"
import { FaGithub, FaLink } from "react-icons/fa"
import styled from "styled-components"

export default function ProjectCard({ project }) {
  return (
    <StyledCard>
      <div>
        <h4>{project.title}</h4>

        <p>{project.desc}</p>
      </div>

      <div className="links">
        <div>
          {project.webLink ? <FaLink /> : <></>}
          {project.githubLink ? <FaGithub /> : <></>}
        </div>
        {project.blogLink ? <p>story behind it ↗</p> : <></>}
      </div>
    </StyledCard>
  )
}

const StyledCard = styled.section`
  margin: 2rem 0;
  border: 1px solid ${props => props.theme.body.title.foreground};
  max-width: 100%;
  padding: 1.5rem 2rem;
  border-radius: 0.4rem;
  display: grid;
  grid-template-columns: 2fr 1fr;

  .links {
    display: flex;
    border-left: 1px solid #ef4562;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 1.5rem;
    padding-left: 1.5rem;
    p {
      margin-top: 1rem;
    }
  }
  svg {
    color: ${props => props.theme.body.title.foreground};
    margin-right: 1.5rem;
  }
  h4 {
    font-size: ${props => props.theme.fontSizes[5]};
    margin-bottom: 1rem;
  }
`
