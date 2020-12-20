import React from "react"
import { graphql, Link } from "gatsby"
import Newsletter from "../../components/Utility/newsletter"
import Container from "../../components/container"
import styled from "styled-components"
import { SEO } from "../../components/index"
export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <Container>
      <SEO title="Blog" />

      <StyledBlog>
        <h2>my blog posts</h2>
        <p className="funfact">
          fun fact : my mom still thinks being an SWE I can repair the faulty TV
          at my home.
        </p>
        {posts.map((post, index) => (
          <article key={post.id}>
            <Link to={post.fields.slug}>
              <h3>{post.frontmatter.title} ↗</h3>
            </Link>
            <small>
              {post.frontmatter.author}, {post.frontmatter.date}
            </small>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </StyledBlog>
      <Newsletter />
    </Container>
  )
}

const StyledBlog = styled.section`
  a {
    text-decoration: none;
  }
  h3 {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }
  small {
    color: ${props => props.theme.body.description.foreground};
  }
  p {
    margin: 0 auto;
  }
  .funfact {
    margin: 0.5rem 0;
  }
`

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`
