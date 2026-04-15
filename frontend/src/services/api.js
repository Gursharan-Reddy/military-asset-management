import axios from 'axios';

const isLocalhost = window.location.hostname === 'localhost';

const API = axios.create({
    baseURL: isLocalhost 
        ? 'http://localhost:5000/api' 
        : 'https://military-asset-management-n4g9.onrender.com/api',
});

export default API;