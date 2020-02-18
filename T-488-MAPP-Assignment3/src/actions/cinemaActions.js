import getAllCinemas from '../services/CinemaService';
import * as constants from '../constants';

export const getCinemas = () => {
	return async dispatch => {
		try {
			const cinemas = await getAllCinemas();
			let removeUnwantedCharacters = JSON.stringify(cinemas)
			var cleanString = removeUnwantedCharacters.replace(/\\t|\\n|\\r|<[^>]+>/gm, '');
			cinemaObject = JSON.parse(cleanString);
			dispatch(getcinemasSuccess(cinemaObject));
		} catch (err) {
			return (err);
		}
	};
};

const getcinemasSuccess = cinemas => {
	return {
		type: constants.GET_CINEMAS,
		payload: cinemas
	};
};