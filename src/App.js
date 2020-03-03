import React from 'react';
import breakingBad from './breaking-bad.jpg';
import batman from './batman.jpg';
import freshprince  from './freshprince.jpg';
import godfather from './godfather.jpg';
import mywifeandkids from './mywifeandkids.jpg';
import onlyfoolsandhorses from './onlyfoolsandhorses.jpeg';
import './App.css';
import Movies from './Movies';

function App() {
  return (
    <div className="App">
       <h1>Welcome to Kodflix </h1>
       <div className="container">
        <Movies name='Breaking bad' img={breakingBad} />
        <Movies name='Batman' img={batman} />
        <Movies name='Godfather' img={godfather} />
      </div>
      <div className="container">
        <Movies name='My wife and kids' img={mywifeandkids} />
        <Movies name='Only fools and horses' img={onlyfoolsandhorses} />
        <Movies name='Fresh prince' img={freshprince} />
      </div>
    </div>
  );
}

export default App;
