import React from "react"
import styled from "styled-components"
import Container from "../components/container"
import Timeline from "../images/assets/timeline"
import logo from "../images/dp (2).jpg"

export default function About() {
  return (
    <Container>
      <StyledAbout>
        <h2>about</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={logo}
            height="200"
            width="200"
            style={{
              borderRadius: "50%",
            }}
            alt="test-alt"
          />
        </div>

        <p>
          Hey , thanks for reading by. This is me in a highly edit picture if
          mine where i look good which i am not. i am Rohan. many people call me
          Ro. & i like it that way.
        </p>

        <article>
          <strong>
            <h4>what the name signify ? </h4>
          </strong>
          <p>
            “Rohan” in sanskrit signifies “Ascending” and i am following it
            daily by learning and evolving myself.
          </p>
        </article>

        <article>
          <strong>
            <h4>where ?</h4>
          </strong>
          <p>
            I was born and brought in the beautiful place in “northern bengal”
            based out in “India.” if you ever visit my place we might have a tea
            together someday produced just nearby my home.
          </p>
        </article>

        <article>
          <strong>
            <h4>some personal interest </h4>
          </strong>
          <p>
            I love bike rides and travelling solo. I would definetely start
            travelling around and making vlogs & stories .
          </p>
        </article>

        <article>
          <strong>
            <h4>the schooling story </h4>
          </strong>

          <p>
            i studied the secondary and sr. secondary from the same school. It
            happened well , great sets of friends and tried out sports to study
            . so many memories attached out there , we friends stills wish to a
            have school day sitting out on the same benches.
          </p>
        </article>

        <article>
          <strong>
            <h4>the college story </h4>
          </strong>

          <p>
            I love bike rides and travelling solo. I would definetely start
            travelling around and making vlogs & stories .
          </p>
        </article>

        <article>
          <strong>
            <h4>some personal interest </h4>
          </strong>

          <p>
            getting into Computer Science & Engineering which i had no idea how
            will do by just having a interest of computers. Hostel is one the
            best things happened to my life. “It taught how to live a life”. I
            was always a introvert & extrovert too depends upon the people i am
            surrounded with. I still miss the 2 AM hostel stories & the birthday
            bashes. being a last bencher i have seen the whole class in a
            different way. nevermind , anyone reading this from SMIT do react
            out @rohanprasadofficial on insta , i am super active there. Atlast
            , i am 2020 batch graduating virtually where pre well planned things
            got ruined.
          </p>
        </article>

        <article>
          <h3>the journey timeline so far </h3>
          <Timeline />
        </article>
      </StyledAbout>
    </Container>
  )
}

const StyledAbout = styled.section`
  h2 {
    margin-bottom: 3rem;
  }
  svg {
    path {
      color: white;
    }
  }

  p {
    margin: 1rem 0;
    span {
      color: #00bfa5;
    }
  }
`
