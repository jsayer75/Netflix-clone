import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { addToMyList, removeFromMyList } from '../store/actions/index';

import PlayLogo from '../static/images/play-button.svg';
import AddIcon from '../static/images/add.svg';
import RemoveIcon from '../static/images/remove.svg';

function Header({ movie, addToMyList, myMovieList, removeFromMyList }) {
  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
    backgroundPosition: 'center',
  };
  const [isListed, setIsListed] = useState(false);
  useEffect(() => {
    if (myMovieList.data?.find((mv) => mv.id === movie.id)) {
      setIsListed(true);
    } else {
      setIsListed(false);
    }
  }, [myMovieList, movie]);
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
      removeFromMyList,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
