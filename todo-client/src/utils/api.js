import axios from "axios";

const AUTH_ENDPOINTS = ['/api/auth/login', '/api/auth/signup'];

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.timeout = 20000;

axios.interceptors.request.use(config => {
    const token  = localStorage.getItem("token");
    if (token && !AUTH_ENDPOINTS.includes(config.url)) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
}, error => {
    Promise.reject(error).then()
});

export default axios;
