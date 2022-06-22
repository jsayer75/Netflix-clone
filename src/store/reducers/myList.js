import { ADD_TO_MY_LIST } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_TO_MY_LIST: {
      const payload = action.payload;
      if (state.data) return { data: [...state.data, payload] };
      else return { data: [payload] };
    }
    default:
      return state;
  }
}
