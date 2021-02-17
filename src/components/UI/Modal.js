import React from 'react';
import PropTypes from 'prop-types';

import Backdrop from './Backdrop';

function Modal({ movie, modalClosed, show, children }) {
  const backgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${
      movie.backdrop_path || movie.poster_path
    })`,
  };

  return (
    <>
      <Backdrop show={show} toggleBackdrop={modalClosed} />
      <div
        style={backgroundStyle}
        className={show ? 'modal show' : 'modal hide'}
      >
        {children}
      </div>
    </>
  );
}

Modal.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string,
    poster_path: PropTypes.string,
  }).isRequired,
  show: PropTypes.bool.isRequired,
  modalClosed: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default Modal;
