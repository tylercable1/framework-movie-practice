import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './Movie.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super();
    this.state = {

    };
  }

  render() {
    return (
       <div className="movie-list">
          {this.props.movies.map((movie) =>
            <Movie key={movie.title} movie={movie} />
          )}
        </div>
    )
  }
}

export default MovieList;