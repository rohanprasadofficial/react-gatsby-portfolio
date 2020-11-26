import PropTypes from "prop-types"
import React from "react"
import Navbar from "../Utility/Navbar/navbar"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Rohan P.`,
}

export { Header }
