import React from "react"
import styled from "styled-components"
import { SEO } from "../components"
import Container from "../components/container"

import ProjectCard from "../components/Utility/projectCard"

export default function Creative() {
  return (
    <Container>
      <SEO title="Creative" />
      <h3>{"//"} some dev projects</h3>

      <ProjectCard />

      <h3>{"//"} some design projects</h3>

      <ProjectCard />
    </Container>
  )
}
