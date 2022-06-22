import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { addToMyList } from '../store/actions/index';

import PlayLogo from '../static/images/play-button.svg';
import AddLogo from '../static/images/add.svg';

function Header({ movie, addToMyList, myMovieList }) {
  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
    backgroundPosition: 'center',
  };
  const handleAddToMyList = () => {
    if (!myMovieList.data?.find((mv) => mv.id === movie.id)) {
      addToMyList(movie);
      alert('Successfully Added');
    } else {
      alert('Already exists in myList');
    }
  };

  return (
    <header style={backgroundStyle} className="header">
      <div className="header__container">
        <h1 className="header__container-heading">{movie.name}</h1>
        <button
          onClick={() => alert('not a movie!')}
          className="header__container-btnPlay"
        >
          <PlayLogo className="header__container-btnMyList-play" />
          Play
        </button>
        <button
          className="header__container-btnMyList"
          onClick={handleAddToMyList}
        >
          <AddLogo className="header__container-btnMyList-add" />
          My List
        </button>
        <p className="header__container-overview">{movie.overview}</p>
      </div>
      <div className="header--fadeBottom"></div>
    </header>
  );
}
Header.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string,
    overview: PropTypes.string,
    backdrop_path: PropTypes.string,
  }).isRequired,
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
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
