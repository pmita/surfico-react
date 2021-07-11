import { createGlobalStyle } from "styled-components";
//importing the fonts
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';
import MontserratRegular from '../assets/fonts/Montserrat-Regular.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';

const Typography = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat Bold';
        src: url(${MontserratBold});
        font-style: normal;
    }
    @font-face {
        font-family: 'Montserrat Regular';
        src: url(${MontserratRegular});
        font-style: normal;
    }
    @font-face {
        font-family: 'Montserrat SemiBold';
        src: url(${MontserratSemiBold});
        font-style: normal;
    }
    html, 
    *{
        font-family: 'Montserrat Regular';
    }
`;

export default Typography;

