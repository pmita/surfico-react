import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *::before,
    *::after{
        box-sizing: inherit;
    }
    :root{
        --main-color: #222326;
        --sec-color: #fff;
        --h1: 3rem;
        --h2: 2.4rem;
        --h3: 2rem;
        --h4: 1.8rem;
        --h5: 1.6rem;
        --h6: 1.4rem;
    }
    html{
        font-size: 62.5%;
        line-height: 1.3;
    }
    body{
        overflow-x: hidden;
    }
    a{
        text-decoration: none;
        color: var(--sec-color);
    }
    li{
        list-style-type: none;
    }
    h1{
        font-size: var(--h1);
    }
    h2{
        font-size: var(--h2);
    }
    h3{
        font-size: var(--h3);
    }
    h4,
    p,
    a{
        font-size: var(--h4);
    }
    h5{
        font-size: var(--h5);
    }
    h6{
        font-size: var(--h1);
    }
    @media only screen and (max-width: 768px){
        html{
            font-size: 52%;
        }
    }
`;

export default GlobalStyles;