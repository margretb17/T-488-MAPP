import getAllMovies from '../services/MoviesService';
import * as constants from '../constants';

export const getMovies = () => {
	return async dispatch => {
		try {
			const movies = await getAllMovies();
			let removeUnwantedCharacters = JSON.stringify(movies)
			var cleanString = removeUnwantedCharacters.replace(/\\t|\\n|\\r|<[^>]+>/gm, '');
			movieObject = JSON.parse(cleanString);
			dispatch(getMoviesSuccess(movieObject));
		} catch (err) {
			return (err);
		}
	};
};

const getMoviesSuccess = movies => {
	return {
		type: constants.GET_MOVIES,
		payload: movies
	};
};