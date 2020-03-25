import React from 'react';
import Movies from '../Movies/Movies';
import ArrayList from '../Movies/ArrayList';

function Gallery (props) {
    return (
    <div>
     <div className="container">
          {
          ArrayList().map(movie => (
            <Movies
                key={movie.id}
                id={movie.id}
                name={movie.name}
                img={movie.img} 
            />
          ))
        }
      </div>
      </div>
    );
  }

export default Gallery; 
 