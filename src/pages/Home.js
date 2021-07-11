import React from 'react';
//importing components
import Banner from '../components/Banner';
import LocationsSection from '../components/LocationsSection';
//importing assets
import banner from '../assets/images/product-1.jpg';

const Home = () => {
    return(
        <div>
            <Banner 
                imgBanner = {banner}
                imgAltText = 'Banner background of a surfer going through a wave'
            />
            <LocationsSection />
        </div>
    )
}

export default Home;