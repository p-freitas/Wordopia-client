import { createGlobalStyle } from 'styled-components'
import MyFont from '../assets/fonts/RequestCoffee/OpenType-TT/MyFont.ttf'

const GlobalStyles = createGlobalStyle`
  :root {
    // Colors
    --white: #ffff;
    --black: #000000;
    --red-maroon: #3D0000;
    --red-strong: #950101;
    --red-high: #FF0000;
    --green-high: #1edd01;
    --green-strong: #117a01;
    // Spaces
    --space-lang: 1400px;
    --space-short: 700px;
    // Fonts
    --font-title: 4em;
    --font-medium: 1.5em;
    --font-small: 'PT Sans', sans-serif;
  }
  
  body{
    background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%);
    color: black;
    font-family: var(--font-small);
    font-size: 0.95em;
    font-family: 'MyFont', cursive;
  }

  span{
    color: var(--red-high);
  }
  
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'MyFont', cursive;

    ::-webkit-scrollbar-track {
      background: rgba(141, 153, 174, 0.5);
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(141, 153, 174, 0.7);
    }

    &::-webkit-scrollbar {
      width: 10px;
      padding: 5px 0;
    }
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }

  @font-face {
    font-family: 'MyFont';
    src: url(${MyFont}) format('truetype');
  }
`

export default GlobalStyles
