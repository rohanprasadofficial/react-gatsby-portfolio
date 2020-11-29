import React from "react"
import styled from "styled-components"

export default function BlogCard() {
  return (
    <StyledBlogCard>
      <h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.{" "}
      </p>
    </StyledBlogCard>
  )
}

const StyledBlogCard = styled.div`
  h3 {
    font-size: 1.3rem;
    color: ${props => props.theme.body.subtitle.foreground};
    margin-bottom: 0.8rem;
    transition: color 2s ease;
  }
  p {
    color: ${props => props.theme.body.description.foreground};
    transition: color 2s ease;
  }
`
