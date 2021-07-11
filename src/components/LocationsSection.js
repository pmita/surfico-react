import React, { useState } from 'react';
//importing components
import Headlines from './Headlines';
import LocationItem from './LocationItem';
//importing everything styled components related;
import styled from 'styled-components';
//importing assets
import locationData from '../assets/data/SurfingLocations';

const LocationsStyle = styled.div`
    min-height: 100vh;
    width: 100%;
    background: grey;
    .headline-wrapper{
        padding: 5rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const LocationsBodyStyle = styled.div`
    padding: 0 10rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    grid-auto-rows: minmax(300px, 500px);
    gap: 1rem;
`;

const LocationsSection = () => {
    //Setting up our state
    const [allLocations, setAllLocations] = useState(locationData);
    return(
        <LocationsStyle>
            <Headlines 
                header="We are constantly expanding"
                subheader="Some of our latest locations"
            />
            <LocationsBodyStyle className="locations-body">
                  {allLocations.map( (item, index) => (
                    <LocationItem 
                        key={index}
                        title={item.title}
                        location={item.location}
                        desc={item.desc}
                        img={item.img}
                    />
                ))}
            </LocationsBodyStyle>
            
        </LocationsStyle>
    );
}

export default LocationsSection;