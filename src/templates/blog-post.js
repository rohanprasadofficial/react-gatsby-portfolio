import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Container>
      <h3>{post.frontmatter.title}</h3>
      <small>{post.frontmatter.date}</small>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Container>
  )
}

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
