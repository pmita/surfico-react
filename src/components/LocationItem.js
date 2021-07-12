import React from 'react';
//import everything styled components related
import styled from 'styled-components';
//importing components
import Button from '../components/Button';

const LocationItemStyle = styled.div`
    width: 100%;
    height: 100%;
    background: var(--sec-color);
    border-radius: 20px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    img{
        height:60%;
        width: 100%;
        object-fit: cover;
        border-radius: 20px;
    }
    h2{
        margin: 2rem 0rem 1rem 0rem;
    }
    h4{
        margin: 0rem 0rem 1rem 0rem;
    }
`;

const LocationItem = ({
    title="Location title",
    location=`Surfing's spot location`,
    desc='Pace description for each surfing spot here',
    img
}) => {
    return(
        <LocationItemStyle>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{location}</h4>
            <p>{desc}</p>
            <Button buttonLink="/" buttonText="Learn More"/>
        </LocationItemStyle>
    );
}

export default LocationItem;