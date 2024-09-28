import axios from 'axios';
const http = axios.create({
    baseURL: 'http://localhost:8081/api/bio',
    headers: {
        'Content-type': 'application/json',
    },
})
export default http;