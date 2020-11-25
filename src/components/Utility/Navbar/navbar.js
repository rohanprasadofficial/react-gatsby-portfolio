import React from "react"
import styled from "styled-components"

export default function Navbar() {
  return (
    <StyledNav>
      <div className="logo">Ro.</div>
      <div className="nav-items">
        <ul>
          <li>
            <span>i. </span>home
          </li>

          <li>
            <span>ii. </span>creative
          </li>

          <li>
            <span>iii. </span>experience
          </li>

          <li>
            <span>iv. </span>youtube
          </li>

          <li>
            <span>v. </span>contact
          </li>

          <li>
            <span>vi. </span>blog
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
  max-width: 960px;
  padding: 15px 0;
  margin-bottom: 20px;
  margin-top: 20px;
  /* box-shadow: 2px 5px 10px #aaaaaa; */
  font-family: "Comfortaa", cursive;

  .logo {
    margin: auto 0;
    color: #00865e;
    font-size: 2rem;
  }

  li {
    display: inline;
    padding: 0 2rem;
    margin: 0 auto;
  }
`
