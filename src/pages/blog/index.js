import React from "react"
import { graphql, Link } from "gatsby"
import Newsletter from "../../components/Utility/newsletter"
import Container from "../../components/container"

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <Container>
      <Newsletter />
      <h1>My blog posts</h1>

      {posts.map(post => (
        <article key={post.id}>
          <Link to={post.fields.slug}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
          <small>
            {post.frontmatter.author}, {post.frontmatter.date}
          </small>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </Container>
  )
}

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
