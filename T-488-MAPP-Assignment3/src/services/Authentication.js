export const getAuthentication = () => {
    // Request                       
   return fetch('http://api.kvikmyndir.is/authenticate', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: 'arnara',
            password: 'Abc.123'
        })
    })
        .then((response) => response.json())
        .then((responseData) => {
            return responseData.token;
        });
};