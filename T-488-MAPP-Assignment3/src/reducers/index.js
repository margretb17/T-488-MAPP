import { combineReducers } from 'redux';
import cinema from './cinemasReducer';
import movie from './moviesReducer'
import upComingMovie from './upcomingMoviesReducer';

export default combineReducers({
    /* This is the Redux store state structur */
    cinema,
    movie,
    upComingMovie
});