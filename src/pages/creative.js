import React from "react"
import styled from "styled-components"
import { SEO } from "../components"
import Container from "../components/container"

import ProjectCard from "../components/Utility/projectCard"

export default function Creative() {
  const devProjects = [
    {
      title: "TEst1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      blogLink: "test",
      githubLink: null,
      webLink: "test",
    },
    {
      title: "TEst3",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      blogLink: null,
      githubLink: "test",
      webLink: "test",
    },
    {
      title: "TEst5",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      blogLink: "test",
      githubLink: "test",
      webLink: null,
    },
  ]

  const designProject = [
    {
      title: "TEst1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      blogLink: "test",
      webLink: "test",
    },
    {
      title: "TEst3",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      blogLink: null,
      webLink: "test",
    },
    {
      title: "TEst5",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      blogLink: "test",
      webLink: "test",
    },
  ]

  return (
    <Container>
      <SEO title="Creative" />
      <h3>some dev projects</h3>
      <StyledCreative>
        {devProjects.map(pro => {
          return <ProjectCard project={pro} />
        })}
      </StyledCreative>
      <h3>some designs</h3>
      <StyledCreative>
        {designProject.map(pro => {
          return <ProjectCard project={pro} />
        })}
      </StyledCreative>
    </Container>
  )
}

const StyledCreative = styled.section``
