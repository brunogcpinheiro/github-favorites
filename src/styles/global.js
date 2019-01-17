import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Muli', sans-serif;
      outline: none;
      font-size: 10px;
  }
  
  body {
        background: #f5f5f5;
  }
  
  button, a {
        cursor: pointer;
  }
`