import React from "react"
import { AiFillCaretRight } from "react-icons/ai"
import styled from "styled-components"
import Container from "../components/container"
import { SEO } from "../components/"
export default function Experience() {
  /* I have done this intentionally the old school and not having state
   based tab thing because i want you to make PR on this with great class based code.*/

  const showDesc = e => {
    let d = document.querySelectorAll(".orglist__item--title")
    d.forEach(e => {
      e.classList.add("inactive-org")
    })
    e.target.classList.remove("inactive-org")
    let dt = e.target.getAttribute("data-target")

    let d1 = document.querySelectorAll(".orgdesc")
    d1.forEach(e => {
      e.classList.add("inactive-desc")
      if (dt === e.getAttribute("data-target")) {
        e.classList.remove("inactive-desc")
      }
    })
  }

  return (
    <Container>
      <SEO title="Experience" />
      <StyledDiv>
        <h2> where i work </h2>
        <p>
          coming from Computer Science backgroud i kept exploring various
          oppurtunities . I started freelancing in my 2nd year of my college and
          continued it for 2+ years till i started into my one of my full time
          roles. I also did some contract position. I have listed which i can
          share and others had NDA so cannot share much.
        </p>
        <br />
        <p>
          I have worked with various people across various timezones & have been
          a great experiences with the mixture pros & cons .
        </p>

        <div className="orgcontainer">
          <div className="orglist">
            <div
              role="button"
              onKeyPress={showDesc}
              className="orglist__item"
              onClick={showDesc}
              tabIndex={-5}
            >
              <h5 className="orglist__item--title" data-target="1">
                Microsoft
              </h5>
              <span>
                <AiFillCaretRight />
              </span>
            </div>
            <div
              role="button"
              onKeyPress={showDesc}
              className="orglist__item"
              onClick={showDesc}
              tabIndex={-4}
            >
              <h5 className="orglist__item--title inactive-org" data-target="2">
                Keysight Technolgies
              </h5>
              <span>
                <AiFillCaretRight />
              </span>
            </div>
            <div
              role="button"
              onKeyPress={showDesc}
              className="orglist__item"
              onClick={showDesc}
              tabIndex={-3}
            >
              <h5 className="orglist__item--title inactive-org" data-target="3">
                EXFIT
              </h5>
              <span>
                <AiFillCaretRight />
              </span>
            </div>

            <div
              role="button"
              onKeyPress={showDesc}
              className="orglist__item"
              onClick={showDesc}
              tabIndex={-2}
            >
              <h5 className="orglist__item--title inactive-org" data-target="4">
                Bharg Technologies
              </h5>
              <span>
                <AiFillCaretRight />
              </span>
            </div>
            <div>
              <div
                role="button"
                onKeyPress={showDesc}
                className="orglist__item"
                onClick={showDesc}
                tabIndex={-1}
              >
                <h5
                  className="orglist__item--title inactive-org"
                  data-target="5"
                >
                  BlissLife App
                </h5>
                <span>
                  <AiFillCaretRight />
                </span>
              </div>
            </div>
          </div>
          <div className="orgdesc " data-target="1">
            <h3>UX Developer - Consultant</h3>
            <p>
              <strong> Hyderabad , India </strong>
            </p>
            <p style={{ color: "green" }}>currently</p>
            <ul>
              <li>- work on building web ui day in and out. </li>
              <li>
                - write modern , maintainable & accesible code for a diverse
                projects.
              </li>
              <li>
                - write upon varieties of technoliges and frameworks such as
                React , Angular , Sass etc.
              </li>
              <li>
                - web should be accessible to everyone , also focuses on the
                accessibilty , reponsiveness , inclusiveness etc.
              </li>
            </ul>
          </div>

          <div className="orgdesc inactive-desc" data-target="2">
            <h3>R&D Intern</h3>
            <p>
              <strong> Kolkata , India </strong>
            </p>

            <ul>
              <li>
                - Worked with the CloudPeak team which allows to test the
                IaaS(Infrastructure as a Service) and draw conclusions about it.
              </li>
              <li>- Worked on various automations and style modification.</li>
              <li>- wrote frontend xml frameworks for styling display..</li>
            </ul>
          </div>

          <div className="orgdesc inactive-desc" data-target="3">
            <h3>Android Engineer</h3>
            <p>
              <strong> Kyiv , Ukraine </strong>
            </p>
            <ul>
              <li>- worked on the main Android App </li>
              <li>- implemented subscription model for the company.</li>
              <li>
                - implemented video compression & playing mechanism for
                excercises.
              </li>
              <li>
                - designed high quality android app which runs the entire
                revenue model of the company.
              </li>
            </ul>
          </div>

          <div className="orgdesc inactive-desc" data-target="4">
            <h3>Fullstack Developer</h3>
            <p>
              <strong> Schwyz, Switzerland </strong>
            </p>

            <ul>
              <li>- worked on main Android App and Backend Features. </li>
              <li>
                - wrote microservices which can be integreted to different
                platforms & services to have a central platform.
              </li>
              <li>- converted the design into Apps & Websites.</li>
              <li>
                - worked directly with founders to bring startup into life.
              </li>
            </ul>
          </div>

          <div className="orgdesc inactive-desc" data-target="5">
            <h3>Fullstack Developer</h3>
            <p>
              <strong>Schwyz, Switzerland</strong>
            </p>
            <ul>
              <li>
                - worked on design architecure of the platform from scratch.
              </li>
              <li>
                - building android apps and various marketing website of the
                platform to onbaord users.
              </li>
              <li>
                - work with the designers to bring design concepts to real apps.
              </li>
              <li>- Also worked on developing entire backend.</li>
            </ul>
          </div>
        </div>
      </StyledDiv>
    </Container>
  )
}

const StyledDiv = styled.div`
  h2 {
    margin-bottom: 1rem;
  }
  .orgcontainer {
    display: flex;
    justify-content: space-around;
  }

  .orgdesc {
    display: flex;
    flex-direction: column;
    padding: 0 1.25rem;
    justify-content: center;
    border-left: 1px solid ${props => props.theme.body.button.background};
    margin: 3.25rem 0;
    ul {
      padding: 0;
      li {
        line-height: 1.6rem;
      }
    }
  }

  .orglist {
    margin: 1rem 0;
    &__item {
      display: flex;
      margin: 1.25rem 0;
      span {
        align-items: center;
        margin: auto 0;
      }
      &--title {
        cursor: pointer;

        width: 9rem;
        padding: 0.75rem 0rem;
        text-align: center;
        background-color: ${props => props.theme.body.button.background};
        color: ${props => props.theme.body.button.foreground};
      }
    }
  }
  background-color: ${props => props.theme.body.background};
  color: ${props => props.theme.body.title.foreground};

  .inactive-desc {
    display: none;
  }

  .active-org {
    span {
      display: block;
    }
  }
  .inactive-org {
    background-color: ${props => props.theme.body.background};
    color: ${props => props.theme.body.button.background};
    & + span {
      display: none;
    }
  }
`
