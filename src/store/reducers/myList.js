import { ADD_TO_MY_LIST, REMOVE_FROM_MY_LIST } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_TO_MY_LIST: {
      const payload = action.payload;
      if (state.data) return { ...state, data: [...state.data, payload] };
      else return { ...state, data: [payload] };
    }
    case REMOVE_FROM_MY_LIST: {
      const movieId = action.payload;
      const index = state.data.findIndex((movie) => (movie.id = movieId));
      const sliced = state.data.splice(index, 1);
      return { ...state, data: [...sliced] };
    }
    default:
      return state;
  }
}
