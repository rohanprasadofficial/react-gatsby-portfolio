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
      <FaFacebookF />
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
    padding-right: 1rem;
    &:hover {
      color: greenyellow;
    }
  }
`
