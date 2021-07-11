import React from 'react';
//importing everything react router related
import { Link } from 'react-router-dom';
//import everything styled-components related
import styled from 'styled-components';

const ButtonStyle = styled.button`
    padding: 10px 20px;
    outline: none;
    /*
        We are changing the color scheme of our button
        based on the -moz-context-properties.outline value 
    */
    background: ${ props => (
        props.outline ? 'var(--sec-color)' : 'var(--main-color)'
    )};
    border: 2px solid ${ props => (
        props.outline ? 'var(--main-color)' : 'var(--sec-color)'
    )};
    .buttonBody{
        color : ${ props => (
            props.outline ? 'var(--main-color)' : 'var(--sec-color)'
    )};
    }
    &:hover{
        background: ${ props => (
            props.outline ? 'var(--main-color)' : 'var(--sec-color)'
        )};
        .buttonBody{
            color : ${ props => (
                props.outline ? 'var(--sec-color)' : 'var(--main-color)'
            )};
        }
    }
`;

const Button = ({
    buttonLink = '/about',
    buttonText = "Learn More",
    outline = false
}) => {
    return(
       <ButtonStyle 
            className="buttonWrapper"
            outline={outline}
        >
           <Link 
                className="buttonBody" 
                to={buttonLink}
            >
                {buttonText}
            </Link>
       </ButtonStyle>
    );
}

export default Button;