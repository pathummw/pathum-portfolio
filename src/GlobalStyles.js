import { createGlobalStyle } from 'styled-components';
import { COLORS } from './Colors';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color:${COLORS.BACKGROUND_BLACK};
    color: ${COLORS.FONT_WHITE};
    overflow-x: hidden;

    @media screen and (max-width: 730px){
      width: 100vw;
    }
    @media screen and (max-width: 450px){
      width: 100vw;
    }

    //Galaxy fold
    @media screen and (max-width: 280px){
      width: 100vw;
    }



}
`
export default GlobalStyle;


/* GOLD: '#D1AD54',
    FONT_GREY: '#716D6D',
    BACKGROUND_BLACK: '#161515',
    FONT_WHITE: '#D1D1D1', */