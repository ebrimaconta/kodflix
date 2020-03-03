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
          <div className="overlay">
            <h1>Breaking Bad </h1>
          </div>
        </div>
        <div className="item">
          <img src={batman} alt="Batman" />
          <div className="overlay">
            <h1>Batman Begins</h1>
          </div>
        </div>
        <div className="item">
          <img src={godfather} alt="Godfather" />
          <div className="overlay">
            <h1>Godfather</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="item">
          <img src={mywifeandkids} alt="My wife and kids" />
          <div className="overlay">
            <h1>My wife and kids</h1>
          </div>
        </div>
        <div className="item">
          <img src={onlyfoolsandhorses} alt="Only fools and horses" />
          <div className="overlay">
            <h1>Only fools and horses</h1>
          </div>
        </div>
        <div className="item">
          <img src={freshprince} alt="Fresh prince" />
          <div className="overlay">
            <h1>Fresh prince</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
