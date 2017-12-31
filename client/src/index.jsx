import React from 'react';
import ReactDOM  from 'react-dom';
import Search from './components/Search.jsx';
import Movie from './components/Movie.jsx';
import MovieList from './components/MovieList.jsx';
import AddMovie from './components/AddMovie.jsx';
var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div>
      	
      	<div className="search">
      	  <Search

      	  />
      	  <AddMovie

      	  />
      	</div>
      	<MovieList
      	  movies={movies}
      	/>  
     

      </div>
    )
  }
}

ReactDOM.render( <App />, document.getElementById('app'));


// npm install >>> once per repo clone
// npm  install webpack -g >>>> once per machine
// webpack -d --watch  >>> needs new tab(so didn't include in start script)
// new tab npm install -g nodemon >>> once per machine
// nodemon ./server/index.js >>>> made start script(new tab)