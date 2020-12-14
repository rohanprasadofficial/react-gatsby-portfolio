import React from "react"
import { graphql, Link } from "gatsby"
import Container from "../components/container"
import styled from "styled-components"
import { IoIosArrowBack } from "react-icons/io"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Container>
      <StyledPost>
        <Link to="/blog">
          <IoIosArrowBack />
        </Link>
        <h2>{post.frontmatter.title}</h2>
        <small>{post.frontmatter.date}</small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </StyledPost>
    </Container>
  )
}

const StyledPost = styled.section`
  * {
    padding: 0.5rem 0;
    color: ${props => props.theme.body.description.foreground};
  }

  svg {
    height: 40px;
    width: 40px;
  }

  h1,
  h2 {
    padding: 1rem 0;
    margin-top: 0;
    margin-bottom: 0;
    color: ${props => props.theme.body.title.foreground};
  }
  h3,
  h4,
  h5,
  h6 {
    padding: 0.8rem 0;
    color: ${props => props.theme.body.subtitle.foreground};
  }

  p {
    padding: 0.5rem 0;
    color: ${props => props.theme.body.description.foreground};
  }

  blockquote {
    color: ${props => props.theme.body.title.foreground};
  }

  code {
    color: #ef4562;
  }
`

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(fromNow: true)
      }
    }
  }
`
