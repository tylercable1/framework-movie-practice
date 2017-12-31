import React from 'react';
import ReactDOM  from 'react-dom';
import Search from './components/Search.jsx';
import Movie from './components/Movie.jsx';
import MovieList from './components/MovieList.jsx';
import AddMovie from './components/AddMovie.jsx';
import $ from 'jquery';
// var movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      addMovieField: '',
      searchField:'',
      filteredMovies: []

    };
    this.onAddMovieEnter = this.onAddMovieEnter.bind(this);
    this.onChangeMovieField = this.onChangeMovieField.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);

  }

  componentDidMount() {
  	this.requestMovies();
  }

  requestMovies() {

    $.ajax({
      url: 'http://127.0.0.1:3000/movies',
      type: 'GET',
      contentType: 'application/json',
      success: (data) => {
        this.setState({
          movies: data
        })
      },
      error: function(error) {
        console.error('failed to receive movies', error);
      }
    });

  }

  search() {
    $.ajax({
      url: 'http://127.0.0.1:3000/movies',
      type: 'GET',
      contentType: 'application/json',
      success: (data) => {
        this.setState({
          movies: data.filter(movie => movie.title.toLowerCase().indexOf(this.state.searchField.toLowerCase()) > -1)
        })
      },
      error: function(error) {
        console.error('failed to receive movies', error);
      }
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
	$.ajax({
      url: 'http://127.0.0.1:3000/movies',
      type: 'POST',      
      contentType: 'application/json',
      data: JSON.stringify({title: this.state.addMovieField}),
      success: (data) => {
        this.setState({
          movies: data
        })
      },
      error: function (error) {
        console.error('failed to add movie', error);
      }
    });
  } 

  onAddMovieEnter(e) {
    if (e.key === 'Enter') {
      this.addMovie();
    }
    // this.setState({
    // 	movies:movies
    // })
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