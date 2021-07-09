import React from 'react';
//importing components
import Headlines from './Headlines';
//import everything styled-components related
import styled from 'styled-components';
//importing assets
import banner from '../assets/images/product-1.jpg';

const BannerStyles = styled.div`
    min-height: 90vh;
    width: 100%;
    background: url(${banner}) center no-repeat;
    background-size: cover;
    position: relative;
    padding: 0 0 0 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index: -2;
    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0B0B0B;
        opacity: 0.25;
        z-index: -1;
    }
`;

const Banner = () => {
    return(
        <BannerStyles className="banner">
            <Headlines 
                header="A unique experience"
                subheader='Let us help you find the best surfing
                locations so you can focus on surfing only!'
            />
        </BannerStyles>
    );
}

export default Banner;