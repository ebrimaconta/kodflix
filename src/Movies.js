import React from 'react';
import {Link} from "react-router-dom";
function Movies(props) {
    return (
      <Link to="/details" >
      <div className="item">
        <img src={props.img} alt={props.name} />
        <div className="overlay">
          <h1>{props.name}</h1>
        </div>
      </div>
      </Link>
    );
  }

export default Movies; 