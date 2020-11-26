import { Link } from "gatsby"
import React from "react"
import { Header } from "../components"
import Social from "../components/Utility/Social/social"

export default function Contact() {
  return (
    <div>
      <Header />
      <section>
        <h1>let’s collaborate</h1>
        <p>
          For anything , please reach out to :{" "}
          <span>rohanpd.work@gmail.com </span>{" "}
        </p>

        <p>
          Please follow while reaching out :
          <span>
            <Link to="https://www.google.com" target="blank">
              {" "}
              [ LINK ]{" "}
            </Link>{" "}
          </span>{" "}
        </p>
      </section>

      <section>
        <p>connect me on social </p>
        <Social />
      </section>
    </div>
  )
}
