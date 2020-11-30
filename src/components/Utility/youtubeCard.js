import React from "react"
import styled from "styled-components"

export default function YoutubeCard() {
  return (
    <StyledYTCard>
      <div>
        <span>[21/11/2020]</span>{" "}
        <h3 style={{ display: "inline" }}>Important projects to build ?</h3>
        <span>[LINK]</span>
      </div>
      <p>
        Then i move into the a coding club as well in my college where i used to
        teach students programming and guide them too. It was the fantastic
        journey so far but after getting into job also i wanted to follow my
        passion of teaching and these YouTube is one the best platform to reach
        broader and needy students.
      </p>
    </StyledYTCard>
  )
}

const StyledYTCard = styled.section`
  span {
    color: #00bfa5;
  }
  div {
    margin-bottom: 1rem;
  }
`
