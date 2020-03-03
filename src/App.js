import React from 'react';
import breakingBad from './breaking-bad.jpg';
import batman from './batman.jpg';
import freshprince  from './freshprince.jpg';
import godfather from './godfather.jpg';
import mywifeandkids from './mywifeandkids.jpg';
import onlyfoolsandhorses from './onlyfoolsandhorses.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
       <h1>Welcome to Kodflix </h1>
       <div className="container">
        <div className="item">
          <img src={breakingBad} alt="Breaking bad" />
        </div>
        <div className="item">
          <img src={batman} alt="Batman" />
           
        </div>
        <div className="item">
          <img src={godfather} alt="Godfather" />
           
        </div>
      </div>
      <div className="container">
        <div className="item">
          <img src={mywifeandkids} alt="My wife and kids" />
           
        </div>
        <div className="item">
          <img src={onlyfoolsandhorses} alt="Only fools and horses" />
           
        </div>
        <div className="item">
          <img src={freshprince} alt="Fresh prince" />
           
        </div>
      </div>
    </div>
  );
}

export default App;
