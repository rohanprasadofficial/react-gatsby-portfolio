import styled from "styled-components"

// Any Property can come from the them

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  margin-bottom: 5rem;
  section {
    margin-top: 0.5rem;
    color: ${props => props.theme.body.description.foreground};
  }
`
export default StyledFooter
