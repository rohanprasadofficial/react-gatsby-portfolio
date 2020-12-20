import { Link } from "gatsby"
import React from "react"
import { IoIosArrowBack } from "react-icons/io"
import styled from "styled-components"
import { SEO } from "../components"
import Container from "../components/container"

import ProjectCard from "../components/Utility/projectCard"

export default function Creative() {
  const devProjects = [
    {
      title: "Test1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      blogLink: "test",
      githubLink: null,
      webLink: "test",
    },
    {
      title: "Test2",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      blogLink: null,
      githubLink: "test",
      webLink: "test",
    },
    {
      title: "Test3",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      blogLink: "test",
      githubLink: "test",
      webLink: null,
    },
  ]

  const designProject = [
    {
      title: "Test1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      blogLink: "test",
      webLink: "test",
    },
    {
      title: "Test2",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      blogLink: null,
      webLink: "test",
    },
    {
      title: "Test3",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      blogLink: "test",
      webLink: "test",
    },
  ]

  return (
    <Container>
      <SEO title="Creative" />
      <StyledCreative>
        <Link to="/">
          <IoIosArrowBack className="back" />
        </Link>
        <strong>
          <p>
            Note: This is just template for the people forking this repo and
            using it to make their own blog.
          </p>
        </strong>
        <h3>some dev projects</h3>

        {devProjects.map((pro, index) => {
          return <ProjectCard key={index} project={pro} />
        })}
      </StyledCreative>
      <h3>some designs</h3>
      <StyledCreative>
        {designProject.map((pro, index) => {
          return <ProjectCard key={index} project={pro} />
        })}
      </StyledCreative>
    </Container>
  )
}

const StyledCreative = styled.section`
  h3 {
    padding: 1rem 0;
  }

  .back {
    height: 40px;
    width: 40px;
    color: ${props => props.theme.body.button.background};
  }
  background-color: ${props => props.theme.body.background};
`
