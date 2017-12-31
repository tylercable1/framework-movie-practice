import React from 'react';
import ReactDOM  from 'react-dom';

var Search = (props) => (
<div>
  <input
    type="text"	
    onChange={props.onChangeSearch}
  />
  <button 
    type="button">
    Search
  </button>

</div>
); 

export default Search;