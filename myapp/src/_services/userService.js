import axios from 'axios';

export const userService = {
    login,
    logout,
    //getAll
};

function login (username, password) {
    return axios({
            url: 'http://localhost:8081/login',
            method: 'post',
            data: {username: username, password: password}
        })
        .then((response) => {
            alert("user vua login la " + response.data.user.username)
        })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

/* function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
} */

/* function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
} */
