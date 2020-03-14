import breakingBad from '../images/breaking-bad.jpg';
import batman from '../images/batman.jpg';
import freshprince  from '../images/freshprince.jpg';
import godfather from '../images/godfather.jpg';
import mywifeandkids from '../images/mywifeandkids.jpg';
import onlyfoolsandhorses from '../images/onlyfoolsandhorses.jpeg';
import React from 'react';

function getShowsAndMovies() {
    return [
        { id: 'breakingBad', name: 'Breaking bad', img: breakingBad },
        { id: 'batman', name: 'Batman', img: batman },
        { id: 'freshprince', name: 'P.s. I Love You', img: freshprince },
        { id: 'godfather', name: 'Godfather', img: godfather },
        { id: 'mywifeandkids', name: 'My wife and kids', img: mywifeandkids },
        { id: 'onlyfoolsandhorses', name: 'Fresh prince', img: onlyfoolsandhorses }
    ];
}

export default getShowsAndMovies; 