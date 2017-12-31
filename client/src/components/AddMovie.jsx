import React from 'react';
import ReactDOM  from 'react-dom';

var AddMovie = (props) => (
<div>
  <input
    type="text"	
    onKeyPress={props.onAddMovieEnter}
    onChange={props.onChangeMovieField}
    // ref={input => input && input.focus()}
  />
  <button 
    type="button">
    Add Movie
  </button>

</div>
); 

export default AddMovie;