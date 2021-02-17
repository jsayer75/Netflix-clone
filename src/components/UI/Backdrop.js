import React from 'react';
import PropTypes from 'prop-types';

const Backdrop = ({ show, toggleBackdrop }) =>
  show ? <div onClick={toggleBackdrop} className="backdrop"></div> : null;

Backdrop.propTypes = {
  show: PropTypes.bool,
  toggleBackdrop: PropTypes.func,
};
Backdrop.defaultProps = {
  toggleBackdrop: () => {},
};
export default Backdrop;
