import React from 'react';
//importing components
import Headlines from './Headlines';
import Button from './Button';
//import everything styled-components related
import styled from 'styled-components';

const BannerStyles = styled.div`
    min-height: 90vh;
    width: 100%;
    position: relative;
    padding: 0 0 0 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
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
    .imgBanner{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -2;
    }
    .buttonWrapper{
        margin-top: 5rem;
    }
`;

const Banner = ({
    imgBanner = '',
    imgAltText = 'Some alternative text for our banner background'
}) => {
    return(
        <>
        <BannerStyles className="banner">
            <img
                className="imgBanner" 
                src={imgBanner} 
                alt={imgAltText}
            />
            <Headlines 
                header="A unique experience"
                subheader='Let us help you find the best surfing
                locations so you can focus on surfing only!'
                outline={true}
            />
            <Button buttonLink="/about" />
        </BannerStyles>
        </>
    );
}

export default Banner;