import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './Movie.jsx';

var MovieList = (props) => (
 <ul className="movie-list">
    {props.movies.map((movie) =>
      <Movie key={movie.title} movie={movie} />
    )}
  </ul>
);

export default MovieList;