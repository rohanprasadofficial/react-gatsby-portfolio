import React from "react"
import { SEO } from "../components"
import Container from "../components/container"

import ProjectCard from "../components/Utility/projectCard"

export default function Creative() {
  return (
    <Container>
      <SEO title="Creative" />
      <h1>{"//"} some dev projects</h1>
      <ProjectCard />

      <h1>{"//"} some design projects</h1>
      <ProjectCard />
    </Container>
  )
}
