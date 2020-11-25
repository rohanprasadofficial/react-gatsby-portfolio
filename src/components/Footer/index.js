import React from "react"
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"
import { AiOutlineGithub, AiFillHeart } from "react-icons/ai"
import StyledFooter from "./footer.styles"

function Footer() {
  return (
    <StyledFooter>
      <div className="general-info">
        <p>Thanks for being here.</p>
        <p>
          {" "}
          <span>Smile , it’s a good day</span> - “Rohan P.”
        </p>
        <p>It’s 3 PM in Rohan’s City.</p>
      </div>
      <div className="social-info">
        <div className="social-handles">
          <FaLinkedinIn />
          <AiOutlineGithub />
          <FaFacebookF />
          <FaYoutube />
          <GrInstagram />
        </div>
        <div>
          Designed & Built with <AiFillHeart /> by Rohan P.
        </div>
      </div>
    </StyledFooter>
  )
}

export { Footer }
