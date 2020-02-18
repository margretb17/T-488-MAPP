const ENDPOINT = 'http://api.kvikmyndir.is/movies';
import { getAuthentication } from './Authentication';

const getAllMovies = async () => {
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

export default getAllMovies;