import { Link } from "gatsby"
import React from "react"
import { AiFillSound } from "react-icons/ai"
import { FaMoon, FaSun } from "react-icons/fa"
import styled from "styled-components"

export default function Navbar({ toggleTheme, isDark }) {
  return (
    <StyledNav>
      <div className="logo">
        {isDark === "dark" ? (
          <FaSun onClick={toggleTheme} />
        ) : (
          <FaMoon onClick={toggleTheme} />
        )}
        <AiFillSound />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>

          {/* <li>
            <Link to="/creative">creative</Link>
          </li> */}

          <li>
            <Link to="/youtube">youtube</Link>
          </li>

          <li>
            <Link to="/contact">contact</Link>
          </li>

          <li>
            <Link to="/blog">blog</Link>
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
  max-width: 992px;
  padding: 1rem;
  .logo {
    color: ${props => props.theme.body.icon.foreground};
    margin: auto 0;
    svg {
      padding-right: 1.5rem;
      cursor: pointer;
    }
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
