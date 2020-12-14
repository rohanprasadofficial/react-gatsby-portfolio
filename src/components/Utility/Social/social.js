import React from "react"
import styled from "styled-components"
import { FaYoutube, FaLinkedinIn } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"
import { AiOutlineGithub } from "react-icons/ai"
import { Link } from "gatsby"

const sociallinks = {
  facebook: "https://www.facebook.com/rohanprasadofficial",
  twitter: "https://twitter.com/rohanpdofficial",
  instagram: "https://www.instagram.com/rohanprasadofficial/",
  linkedin: "https://www.linkedin.com/in/rohanprasadofficial/",
  github: "https://github.com/rohanprasadofficial",
  youtube: "https://www.youtube.com/rohanprasadofficial",

  target: "blank",
}

export default function Social() {
  return (
    <StyledSocial>
      <Link to={sociallinks.linkedin} target={sociallinks.target}>
        <FaLinkedinIn className="linkedin" />
      </Link>
      <Link to={sociallinks.github} target={sociallinks.target}>
        <AiOutlineGithub className="github" />
      </Link>
      <Link to={sociallinks.youtube} target={sociallinks.target}>
        <FaYoutube className="youtube" />
      </Link>
      <Link to={sociallinks.instagram} target={sociallinks.target}>
        <GrInstagram className="instagram" />
      </Link>
    </StyledSocial>
  )
}

const StyledSocial = styled.section`
  svg {
    color: ${props => props.theme.body.icon.foreground};
    height: 25px;
    width: 25px;
    cursor: pointer;
    margin-right: 0.5rem;
    border-radius: 0.5rem;
    transition: 0.5s ease;
    padding: 0.5rem;
    border-style: solid;
    border-width: 0;
    border-color: rgba(255, 255, 255, 0.16);
  }
  .linkedin :hover {
    color: #0e76a8;
  }
  .github :hover {
    color: #4078c0;
  }
  .youtube :hover {
    color: #ff0000;
  }
  .instagram:hover {
    color: #e1306c;
  }
`
