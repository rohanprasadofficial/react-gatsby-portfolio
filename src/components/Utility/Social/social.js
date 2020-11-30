import React from "react"
import styled from "styled-components"
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"
import { AiOutlineGithub } from "react-icons/ai"
export default function Social() {
  return (
    <StyledSocial>
      <FaLinkedinIn />
      <AiOutlineGithub />
      {/* <FaFacebookF /> */}
      <FaYoutube />
      <GrInstagram />
    </StyledSocial>
  )
}

const StyledSocial = styled.section`
  svg {
    height: 25px;
    width: 25px;
    cursor: pointer;
    margin-right: 0.5rem;
    border-radius: 0.5rem;
    transition: 1s ease;
    padding: 0.5rem;
    border-style: solid;
    border-width: 0;
    border-color: rgba(255, 255, 255, 0.16);
    fill-opacity: 0.5;
    color: ${props => props.theme.body.icon.foreground};
    &:hover {
      background-color: ${props => props.theme.body.icon.background};
    }
  }
`
