import React from 'react';
//importing components
import Headlines from './Headlines';
import Button from './Button';
//importing assets
import AboutImg from '../assets/images/banner.jpg';
//import everything styled-components related
import styled from 'styled-components';

const AboutStyles = styled.div`
    min-height: 100vh;
    width: 100%;
    padding: 10rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .content-left{
        flex: 1 1 40rem;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .content-right{
        flex: 2 1 40rem;
        padding: 0rem 5rem;
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        p{
            margin: 5rem 0;
        }
    }
    @media only screen and (max-width: 768px){
        padding: 2rem 1rem;
        .content-right{
            padding: 0 1rem;
        }
    }
`;

const About = () => {
    return(
        <AboutStyles>
            <div className="content-left">
                <img src={AboutImg} alt="A surfer paddling in the sea, from top view" />
            </div>
            <div className="content-right">
                <Headlines
                    header='Who is behind Surfico'
                    subheader="Just a group of enthusiasts"
                    outline={false}
                />
                <p>
                    We are waves enthusiasts ourself. We spend so much time one the waves
                    and thought there is no better way but share our experiences, love, and passion
                    for the waves with the rest of the world. If there is a famous beach chances are we have visited already.
                    If not; you'll give you a shout over at our instagram!
                </p>
                <Button
                    outline={true}
                    buttonText='Check our Products'
                    buttonLink='/locations'
                />
            </div>
        </AboutStyles>
    );
}

export default  About;