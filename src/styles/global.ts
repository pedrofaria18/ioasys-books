import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
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

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 769px;
    background: #fff;
    padding: 1rem 3rem;
    position: relative;
    border-radius: 0.24rem;

    @media (max-width: 768px) {
      width: 90%;
      height: 80%;
      overflow: auto;
    } 
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    background: transparent;
    border: 1px solid rgba(51, 51, 51, 0.2);
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;

    font-size: 12px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
