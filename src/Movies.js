import React from 'react';

function Movies(props) {
    return (
      <div className="item">
        <img src={props.img} alt={props.name} />
        <div className="overlay">
          <h1>{props.name}</h1>
        </div>
      </div>
    );
  }

export default Movies; 