import React, { useState, useEffect } from 'react';
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
    padding: 10rem;
    background: #E5E5E5;
    .headline-wrapper{
        padding: 1rem 0 5rem 0;;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    form{
        position: relative;
        padding: 1rem;
        max-width: 300px;
        margin-bottom: 5rem;
        input{
            width: 100%;
            padding: 1rem;
            outline: none;
            border: none;
            border-radius: 5px;
            background: var(--sec-color);
            color: var(--main-color);
        }
    }
    @media only screen and (max-width: 820px){
        padding: 1rem;
    }
`;

const LocationsBodyStyle = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 330px);
    grid-auto-rows: minmax(500px, 550px);
    gap: 2rem;
`;

const LocationsSection = () => {
    //Setting up our state
    const [allLocations, setAllLocations] = useState(locationData);
    const [searchLocation, setSearchLocation] = useState('');

    //Seetting our useEffect hooks
    useEffect( ()=>{
        if(searchLocation === '') return;
        setAllLocations( () =>
            locationData.filter( item =>
                item.title.toLocaleLowerCase().match(searchLocation.toLocaleLowerCase())    
            )   
        );
    }, [searchLocation]);

    //Setting our handlers
    const inputTextHandler = (e) => {
        e.preventDefault();
        setSearchLocation(e.target.value);
        if(searchLocation === ''){
            setAllLocations(locationData);
        }
    }
    return(
        <LocationsStyle>
            <Headlines 
                outline={false}
                header="Our Locations"
                subheader="Some of our latest locations"
            />

            <form>
                <input 
                    type="text"
                    placeholder="Filter Location"
                    onChange={inputTextHandler}
                />
            </form>

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