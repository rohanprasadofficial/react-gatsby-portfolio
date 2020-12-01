import { Link } from "gatsby"
import React from "react"
import { AiFillSound } from "react-icons/ai"
import { FaMoon } from "react-icons/fa"
import styled from "styled-components"

export default function Navbar() {
  return (
    <StyledNav>
      <div className="logo">
        <FaMoon />
        <AiFillSound />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <span>/</span> <Link to="/">home</Link>
          </li>

          <li>
            <span>/</span>
            <Link to="/creative">creative</Link>
          </li>

          <li>
            <span>/</span>
            <Link to="/youtube">youtube</Link>
          </li>

          <li>
            <span>/</span> <Link to="/contact">contact</Link>
          </li>

          <li>
            <span>/</span> <Link to="/blog">blog</Link>
          </li>
        </ul>
      </div>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;

  .logo {
    color: ${props => props.theme.body.icon.foreground};
  }

  li {
    display: inline;
    padding: 0 2rem;
    margin: 0 auto;
    color: #00bfa5;
    a {
      color: ${props => props.theme.body.title.foreground};
      text-decoration: none;
      margin-bottom: 30px;
    }
  }
`
