import React, { Component } from 'react';

import MainContent from './MainContent';
import Modal from '../components/UI/Modal';
import MovieDetails from '../components/Movie/MovieDetails';

class Home extends Component {
  state = {
    /** Toggles the modal when a movie is clicked. */
    toggleModal: false,
    /** Holds the movie information for a single movie. */
    movieOverview: {},
  };

  /* Get the appropriate details for a specific movie that was clicked */
  selectMovieHandler = async (movie) => {
    document.body.style.overflow = 'hidden';
    this.setState({ toggleModal: true });
    await this.setState({ movieOverview: movie });
  };

  closeModal = () => {
    document.body.style.overflow = 'auto';
    this.setState({ toggleModal: false });
  };

  render() {
    return (
      <>
        <div className="main-content">
          <MainContent selectMovieHandler={this.selectMovieHandler} />
        </div>
        <Modal
          show={this.state.toggleModal}
          modalClosed={this.closeModal}
          movie={this.state.movieOverview}
        >
          <MovieDetails
            movie={this.state.movieOverview}
            show={this.state.toggleModal}
          />
        </Modal>
      </>
    );
  }
}

export default Home;
