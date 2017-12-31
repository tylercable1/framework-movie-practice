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
      movies: movies,
      addMovieField: '',
      searchField:'',
      filteredMovies: movies

    };
    this.onAddMovieEnter = this.onAddMovieEnter.bind(this);
    this.onChangeMovieField = this.onChangeMovieField.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);

  }

  search() {
  	this.setState({
  	  movies: movies.filter(movie => movie.title.toLowerCase().indexOf(this.state.searchField.toLowerCase()) > -1)
  	});
  		
  }

  onChangeSearch(e) {
  	this.setState({
  	  searchField: e.target.value
  	}, () => {
  	  this.search();	
  	});
  }

  onChangeMovieField(e) {
  	this.setState({
  	  addMovieField: e.target.value
  	});

  }
  addMovie() {
  	movies.push({title: this.state.addMovieField});
  } 

  onAddMovieEnter(e) {
    if (e.key === 'Enter') {
      this.addMovie();
    }
    this.setState({
    	movies:movies
    })
  }


  render() {
    return (
      <div>
      	
      	<div className="search">
      	  <Search
            onChangeSearch={this.onChangeSearch}
      	  />
      	  <AddMovie
			onAddMovieEnter={this.onAddMovieEnter}
			onChangeMovieField={this.onChangeMovieField}
      	  />
      	</div>
      	<MovieList
      	  movies={this.state.movies}
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