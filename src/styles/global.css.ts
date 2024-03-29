import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
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

  p{
    margin: 0;
    padding: 0;
  }

  .icon{
    fill: white;
    width: 20vw;
    min-width: 100px;
    max-width: 140px;
    height: auto;
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgb(185, 185, 185);
  }
`;
