import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function MyList({ myMovieList }) {
  return (
    <>
      <div className="movie-list">
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
          {myMovieList.data?.map((movie, idx) => (
            <>
              <tr key={idx}>
                <td>{movie.id}</td>
                <td>{movie.original_name}</td>
              </tr>
            </>
          ))}
        </table>
      </div>
    </>
  );
}

MyList.propTypes = {
  myMovieList: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

const mapStateToProps = (state) => {
  return {
    myMovieList: state.myMovieList,
  };
};
export default connect(mapStateToProps, null)(MyList);
