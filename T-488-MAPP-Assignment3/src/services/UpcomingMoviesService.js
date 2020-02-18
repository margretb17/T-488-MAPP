const ENDPOINT = 'http://api.kvikmyndir.is/upcoming';
import { getAuthentication } from './Authentication';

const getAllUpcomingMovies = async () => {
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

export default getAllUpcomingMovies;