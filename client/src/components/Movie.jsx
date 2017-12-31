import React from 'react';
import ReactDOM  from 'react-dom';

var Movie = (props) => (
  <li> 
    {props.movie.title}
    <button
      type="button">
      Watched
    </button>
  </li>
); 

export default Movie;