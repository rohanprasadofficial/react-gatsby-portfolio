import { Link } from "gatsby"
import React, { useState } from "react"
import { BiMenuAltRight } from "react-icons/bi"
import { FaMoon, FaSun } from "react-icons/fa"
import styled from "styled-components"

export default function Navbar({ toggleTheme, isDark }) {
  const [isOpen, setIsOpen] = useState(false)

  // if (isOpen) {
  //   document.body.style.backgroundColor = "gray"
  //   document.body.style.opacity = 0.1
  // }

  return (
    <StyledNav>
      <div className="logo">
        {isDark === "dark" ? (
          <FaSun onClick={toggleTheme} />
        ) : (
          <FaMoon onClick={toggleTheme} />
        )}
        {/* <AiFillSound /> */}
      </div>

      <div className="nav-items-sm">
        {isOpen ? (
          <ul>
            <li onClick={() => setIsOpen(false)}>Close</li>
            <li>
              <Link to="/">home</Link>
            </li>

            <li>
              <Link to="/about">about</Link>
            </li>

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
        ) : (
          <BiMenuAltRight
            onClick={() => setIsOpen(true)}
            style={{ color: "red" }}
            className="hambuger"
          />
        )}
      </div>

      <div className="nav-items-md">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>

          <li>
            <Link to="/about">about</Link>
          </li>

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
  .nav-items-sm {
    display: none;
  }
  .nav-items-md {
    ul {
      display: flex;
      flex-wrap: wrap;
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
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
    .nav-items-md {
      display: none;
    }
    .nav-items-sm {
      display: block;
      position: fixed;
      z-index: 1;
      top: 0;
      right: 0;
      transition: 0.5s;
      padding: 2rem 1rem;

      ul {
        background-color: ${props => props.theme.body.title.foreground};
        height: 100vh;

        li {
          display: block;
          padding: 1rem;
          padding-left: 10rem;
          border: 1px solid ${props => props.theme.body.title.foreground};
          position: relative;
        }
      }
    }
  }
`
