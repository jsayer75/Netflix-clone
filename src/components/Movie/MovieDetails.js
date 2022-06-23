import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { addToMyList, removeFromMyList } from '../../store/actions/index';

import AddIcon from '../../static/images/add.svg';
import RemoveIcon from '../../static/images/remove.svg';
import PlayIcon from '../../static/images/play-button.svg';

function MovieDetails({
  movie,
  show,
  addToMyList,
  removeFromMyList,
  myMovieList,
}) {
  const [isListed, setIsListed] = useState(false);
  useEffect(() => {
    if (myMovieList.data?.find((mv) => mv.id === movie.id)) {
      setIsListed(true);
    } else {
      setIsListed(false);
    }
  }, [myMovieList, show]);
  const handleAddToMyList = () => {
    if (!isListed) {
      addToMyList(movie);
      alert('Added A Movie to My List Successfully!');
    } else {
      alert('The Movie Already Exists in My List');
    }
  };

  const handleRemoveToMyList = () => {
    removeFromMyList(movie.id);
    alert('Removed the Movie from My List Successfully!');
  };

  return (
    <div className={`modal__container ${show && 'modal__scroll'}`}>
      <h1 className="modal__title">{movie.title || movie.name}</h1>
      <p className="modal__info">
        <span className="modal__rating">
          Rating: {movie.vote_average * 10}%{' '}
        </span>
        Release date: {movie.release_date || movie.first_air_date}{' '}
        {(movie.runtime || movie.episode_run_time) &&
          `Runtime: 
        ${movie.runtime || movie.episode_run_time}m`}
      </p>
      <p className="modal__episode">
        {movie.number_of_episodes
          ? ' Episodes: ' + movie.number_of_episodes
          : ''}
        {movie.number_of_seasons ? ' Seasons: ' + movie.number_of_seasons : ''}
      </p>
      <p className="modal__overview">{movie.overview}</p>
      <button className="modal__btn modal__btn--red">
        <PlayIcon className="modal__btn--icon" />
        Play
      </button>
      {isListed ? (
        <button className="modal__btn" onClick={handleRemoveToMyList}>
          <RemoveIcon className="modal__btn--icon" />
          My List
        </button>
      ) : (
        <button className="modal__btn" onClick={handleAddToMyList}>
          <AddIcon className="modal__btn--icon" />
          My List
        </button>
      )}
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    first_air_date: PropTypes.string,
    runtime: PropTypes.string,
    episode_run_time: PropTypes.string,
    number_of_episodes: PropTypes.number,
    number_of_seasons: PropTypes.number,
    overview: PropTypes.string,
  }),
  show: PropTypes.bool.isRequired,
  addToMyList: PropTypes.func.isRequired,
  removeFromMyList: PropTypes.func.isRequired,
  myMovieList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    myMovieList: state.myMovieList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addToMyList,
      removeFromMyList,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
