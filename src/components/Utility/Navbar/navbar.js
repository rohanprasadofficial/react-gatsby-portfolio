import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function Navbar() {
  return (
    <StyledNav>
      <div className="logo">Ro.</div>
      <div className="nav-items">
        <ul>
          <li>
            <span>i. </span> <Link to="/">home</Link>
          </li>

          <li>
            <span>ii. </span>
            <Link to="/creative">creative</Link>
          </li>

          <li>
            <span>iii. </span> <Link to="/experience">experience</Link>
          </li>

          <li>
            <span>iv. </span>
            <Link to="/youtube">youtube</Link>
          </li>

          <li>
            <span>v. </span> <Link to="/contact">contact</Link>
          </li>

          <li>
            <span>vi. </span> <Link to="/blog">blog</Link>
          </li>
        </ul>
      </div>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  background-color: #fff;

  padding: 15px 0;

  .logo {
    margin: auto 0;
    color: #00865e;
    font-size: 2rem;
  }

  li {
    display: inline;
    padding: 0 2rem;
    margin: 0 auto;
    a {
      padding: 1rem;
      text-decoration: none;
      margin-bottom: 30px;
      &:hover {
        padding-bottom: 1rem;
        text-decoration: underline;
        text-decoration-style: wavy;
        text-decoration-color: #00865e;
      }
    }
  }
`
