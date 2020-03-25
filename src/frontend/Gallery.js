import React from 'react';
import Movies from './Movies';
import breakingBad from './images/breaking-bad.jpg';
import batman from './images/batman.jpg';
import freshprince  from './images/freshprince.jpg';
import godfather from './images/godfather.jpg';
import mywifeandkids from './images/mywifeandkids.jpg';
import onlyfoolsandhorses from './images/onlyfoolsandhorses.jpeg';

function Gallery (props) {
    return (
    <div>
     <div className="container">
        <Movies name='Breaking bad' img={breakingBad} />
        <Movies name='Batman' img={batman} />
        <Movies name='Godfather' img={godfather} />
        <Movies name='My wife and kids' img={mywifeandkids} />
        <Movies name='Only fools and horses' img={onlyfoolsandhorses} />
        <Movies name='Fresh prince' img={freshprince} />
      </div>
      </div>
    );
  }

export default Gallery; 
 