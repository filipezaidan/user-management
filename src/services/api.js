import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-pweb2.herokuapp.com',
});

export default api;