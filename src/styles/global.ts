import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  :root {
    --primary: #333333;
    --secondary: #999999;

    --pink100: #B22E6F;
    --pink50: #AB2680;

    --input-background: rgba(0, 0, 0, 0.32);
  }
  
  body, button, textarea, input {
    font: 400 1rem "Heebo", sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: 0;

    &:hover {
      cursor: pointer;
    }
  }
`
