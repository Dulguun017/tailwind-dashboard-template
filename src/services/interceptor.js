import axios from 'axios';
import { Link } from "react-router-dom";

let whitelist = ['auth/login', 'auth/forgot', 'auth/change'];

axios.interceptors.request.use(config => {
  if (whitelist.find(e => config.url.includes(e))) return config;
  config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
  return config;
});

axios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
 );

const responseHandler = response => {
    if (response.status === 401 || response.status === 403) {
        window.location = '/auth/login';
    }

    return response;
};

const errorHandler = error => {
    if (error.response.status === 401 || error.response.status === 403) {
      window.location.href = '/auth/login';
    }
};