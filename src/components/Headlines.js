import React from 'react';
//import everything styled-components related
import styled from 'styled-components';

const MainHeaderStyle = styled.h1`
    font-family: 'Montserrat SemiBold', sans-serif;
    font-size: 6rem;
    color: var(--sec-color);
`;

const SubHeaderStyle = styled.h2`
    font-family: 'Montserrat Regular', sans-serif;
    font-size: 2.8rem;
    color: var(--sec-color);
    max-width: 600px;
`;

const Headlines = ({
    header = 'Header goes here',
    subheader = 'Subjeader goes here'
}) => {
    return(
        <>
            <MainHeaderStyle>{header}</MainHeaderStyle>
            <SubHeaderStyle>{subheader}</SubHeaderStyle>
        </>
    );
}

export default Headlines;