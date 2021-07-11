//importing assets
import locationOne from '../images/product-1.jpg';
import locationTwo from '../images/product-2.jpg';
import locationThree from '../images/product-3.jpg';
import locationFour from '../images/product-4.jpg';

const locations = [
    {
        title : `Pro's paradise`,
        location : 'Santa Monica LA',
        desc : 'If you are training for a competition, this is the place you need to check',
        img : locationOne
    },
    {
        title : `Don't forget the beers`,
        location : `Hawaii's secret spot`,
        desc : 'This is a secret location only a few people know outside of Hawaii',
        img : locationTwo
    },
    {
        title : `Basics? Dont worry`,
        location : `Santorini's small village`,
        desc : 'If you are just starting to learn, this is the spot to try ... like right now',
        img : locationThree
    },
    {
        title : `Perfect for holidays too`,
        location : 'San Marino, Spain',
        desc : `If you are visiting Spain please don't miss this spot out`,
        img : locationFour
    },
]

export default locations;