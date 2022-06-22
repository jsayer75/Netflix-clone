import { combineReducers } from 'redux';
import TrendingReducer from './trending';
import NetflixOriginalsReducer from './netflixOriginals';
import TopRatedReducer from './topRated';
import ActionMoviesReducer from './actionMovies';
import ComedyMoviesReducer from './comedyMovies';
import HorrorMoviesReducer from './horrorMovies';
import RomanceMoviesReducer from './romanceMovies';
import DocumentaryReducer from './documentary';
import MyListReducer from './MyList';

const rootReducer = combineReducers({
  trending: TrendingReducer,
  netflixOriginals: NetflixOriginalsReducer,
  topRated: TopRatedReducer,
  action: ActionMoviesReducer,
  comedy: ComedyMoviesReducer,
  horror: HorrorMoviesReducer,
  romance: RomanceMoviesReducer,
  documentary: DocumentaryReducer,
  myMovieList: MyListReducer,
});

export default rootReducer;
