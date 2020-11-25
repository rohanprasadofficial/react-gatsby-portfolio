import styled from "styled-components"

// Any Property can come from the them

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  bottom: 0;
  margin: 0 auto;
  min-width: 960;
  font-family: "Comfortaa", cursive;
  background-color: ${props => props.theme.colors.blues[300]};
  padding: 1.45rem 1.0875rem;

  .general-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p {
      padding: 0;
    }
  }
  .social-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: ${props => props.theme.colors.reds[500]};

    .social-handles {
      display: flex;
      justify-content: space-between;
    }
  }
`
export default StyledFooter
