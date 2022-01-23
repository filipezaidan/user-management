import axios from 'axios';


const api = axios.create({
    baseURL: 'https://pweb2-ifal.herokuapp.com/',
});

export default api;