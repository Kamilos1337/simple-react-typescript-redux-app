import { createGlobalStyle } from 'styled-components'
import backgroundImage from './assets/backgroundImage.jpg'
import SoraFont from './fonts/Sora-Regular.ttf'
import SoraFontBold from './fonts/Sora-Bold.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Sora-regular';
    src: url(${SoraFont}) format('truetype');
  }
    @font-face {
    font-family: 'Sora-bold';
    src: url(${SoraFontBold}) format('truetype');
  }
  body {
   background:url(${backgroundImage});
   font-family: 'Sora-regular';
  }
`
export default GlobalStyle
