import React from "react"
import { graphql } from "gatsby"

function BlogIndex({ data }) {
  const { posts } = data.blog
  console.log(posts)
  return (
    <div>
      <p>Hello {posts[0].frontmatter.title}</p>
      <p>ddrfgvfg</p>
      {posts[0].excerpt}
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
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
