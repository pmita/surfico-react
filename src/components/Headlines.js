import React from 'react';
//import everything styled-components related
import styled from 'styled-components';

const MainHeaderStyle = styled.h1`
    font-family: 'Montserrat SemiBold', sans-serif;
    font-size: 6rem;
    color: ${ props => (
        props.outline ? 'var(--sec-color)' : 'var(--main-color)'
    )};
`;

const SubHeaderStyle = styled.h2`
    font-family: 'Montserrat Regular', sans-serif;
    font-size: 2.8rem;
    color: ${ props => (
        props.outline ? 'var(--sec-color)' : 'var(--main-color)'
    )};
    max-width: 600px;
`;

const Headlines = ({
    header = 'Header goes here',
    subheader = 'Subjeader goes here',
    outline = false
}) => {
    return(
        <div className="headline-wrapper">
            <MainHeaderStyle outline={outline}>{header}</MainHeaderStyle>
            <SubHeaderStyle outline={outline}>{subheader}</SubHeaderStyle>
        </div>
    );
}

export default Headlines;