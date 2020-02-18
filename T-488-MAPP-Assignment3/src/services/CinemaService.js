const ENDPOINT = 'http://api.kvikmyndir.is/theaters';
import { getAuthentication } from './Authentication';

const getAllCinemas = async () => {
	const token = await getAuthentication();
	return fetch(ENDPOINT, {
		method: 'GET',
		headers: {
			'x-access-token': token
		},
	})
		.then((response) => response.json())
		.then((responseData) => {
			return responseData;
		});
};

export default getAllCinemas;