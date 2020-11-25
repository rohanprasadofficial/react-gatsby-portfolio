import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  body,h1,h2,h3,h4,h5,h6 ,p ,a ,li{
    margin: 0;
    padding: 0;
    font-family: "Comfortaa", cursive , sans-serif;
    font-size: 100%;
    line-height: 1;
    ul , ol {
    list-style:none;
    }
  }
  
`

export default GlobalStyle
