import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ movieDetails, movieImage }) => (
  <div className="movie">
    <div onClick={movieDetails} className="movie__column-poster">
      <img src={movieImage} alt="" className="movie__poster" />
    </div>
  </div>
);

Movie.propTypes = {
  movieDetails: PropTypes.func.isRequired,
  movieImage: PropTypes.string.isRequired,
};
export default Movie;
