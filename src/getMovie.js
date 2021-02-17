/* global process */
import MovieGenre from './components/MovieGenre';
import React from 'react';

export function getMovieRows(movies, url) {
  return movies
    .filter((movie) => movie.poster_path && movie.backdrop_path !== null)
    .map((movie) => {
      let movieImageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
      if (
        url === `/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`
      ) {
        movieImageUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
      }

      const movieComponent = (
        <MovieGenre
          key={movie.id}
          url={url}
          posterUrl={movieImageUrl}
          movie={movie}
        />
      );

      return movieComponent;
    });
}
