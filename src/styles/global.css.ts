import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input{
    font-family: 'Lato', sans-serif;
    }

  .clickable{
    cursor: pointer;
    align-self: center;
  }

  .clickable:hover{
    opacity: 0.9;
    transform: scale(0.95);
    transition-delay: .1s,
  }

  .appBlur {
    filter: blur(4px);
    pointer-events: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
