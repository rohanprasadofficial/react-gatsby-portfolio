import React from "react"
import { AiFillHeart } from "react-icons/ai"

import StyledFooter from "./footer.styles"
import Social from "../Utility/Social/social"

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
        <Social />
        <div>
          Designed & Built with <AiFillHeart /> by Rohan P.
        </div>
      </div>
    </StyledFooter>
  )
}

export { Footer }
