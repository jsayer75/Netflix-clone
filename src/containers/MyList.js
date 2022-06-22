/* global process */
import React from 'react';
import { connect } from 'react-redux';

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

MyList.propTypes = {};

const mapStateToProps = (state) => {
  return {
    myMovieList: state.myMovieList,
  };
};
export default connect(mapStateToProps, null)(MyList);
