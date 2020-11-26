import styled from "styled-components"

// Any Property can come from the them

const StyledFooter = styled.footer`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  background-color: #fff;
  padding: 1rem;

  .general-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p {
      padding: 0.5em;
      span {
        color: #00865e;
      }
    }
  }
  .social-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* background-color: ${props => props.theme.colors.reds[500]}; */
  }
`
export default StyledFooter
