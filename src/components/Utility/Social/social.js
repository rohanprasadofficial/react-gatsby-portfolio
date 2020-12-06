import React from "react"
import styled from "styled-components"
import { FaYoutube, FaLinkedinIn } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"
import { AiOutlineGithub } from "react-icons/ai"
export default function Social() {
  return (
    <StyledSocial>
      <FaLinkedinIn className="linkedin" />
      <AiOutlineGithub className="github" />
      {/* <FaFacebookF /> */}
      <FaYoutube className="youtube" />
      <GrInstagram className="instagram" />
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
    transition: 0.5s ease;
    padding: 0.5rem;
    border-style: solid;
    border-width: 0;
    border-color: rgba(255, 255, 255, 0.16);
    fill-opacity: 0.5;
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
