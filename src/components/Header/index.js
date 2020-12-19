import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Navbar from "../Utility/navbar"

const Header = ({ siteTitle, toggleTheme, isDark }) => (
  <StyledHeader>
    <Navbar toggleTheme={toggleTheme} isDark={isDark} />
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Rohan P.`,
}

const StyledHeader = styled.header`
  margin-bottom: 5rem;
`

export { Header }
