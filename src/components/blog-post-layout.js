import React from "react"
import Helmet from "react-helmet"

function BlogPostLayout({ children, pageContext }) {
  const { title, author, date } = pageContext.frontmatter
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <article>
        <header>
          <h1>{title}</h1>
          <span>Author: {author}</span>
          <time>Date: {date}</time>
        </header>
        {children}
      </article>
    </div>
  )
}

export default BlogPostLayout
