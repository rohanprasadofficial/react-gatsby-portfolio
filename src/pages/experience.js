import React from "react"
import { AiFillCaretRight } from "react-icons/ai"
import { Header } from "../components"

export default function Experience() {
  return (
    <section>
      <Header />
      <h1>where i work </h1>
      <p>
        coming from Computer Science backgroud i kept exploring various
        oppurtunities . I started freelancing in my 2nd year of my college and
        continued it for 2+ years till i started into my one of my full time
        roles. I also did some contract position.
      </p>
      <p>
        I have worked with various people across various timezones & have been a
        great experiences with the mixture pros & cons . ↗
      </p>

      <div>
        <div>
          <div>
            Microsoft
            <span>
              <AiFillCaretRight />
            </span>
          </div>
          <div>
            Keysight Technolgies{" "}
            <span>
              <AiFillCaretRight />
            </span>
          </div>
          <div>
            EXFIT{" "}
            <span>
              <AiFillCaretRight />
            </span>
          </div>
          <div>
            OETD Labs{" "}
            <span>
              <AiFillCaretRight />
            </span>
          </div>
          <div>
            Bharg Technologies{" "}
            <span>
              <AiFillCaretRight />
            </span>
          </div>
          <div>
            BlissLife App{" "}
            <span>
              <AiFillCaretRight />
            </span>
          </div>
        </div>

        <div>
          <h2>ux engineer - consultant</h2>
          <p>currently</p>
          <ul style={{ listStyle: "none" }}>
            <li>- work on building web ui day in and out. </li>
            <li>
              - write modern , maintainable & accesible code for a diverse
              projects.
            </li>
            <li>
              - write upon varieties of technoliges and frameworks such as React
              , Angular , Sass etc.
            </li>
            <li>
              - web should be accessible to everyone , also focuses on the
              accessibilty , reponsiveness , inclusiveness etc.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
