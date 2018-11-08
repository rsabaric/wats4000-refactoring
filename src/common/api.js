//Base API Configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function(config) {
    //Set common parameters for each request to API
    config.params.APPID = '340fee47ad4e10770597cdc17327d3a4';
    config.params.units = 'imperial';

    return config;
}, function (error) {
    return Promise.reject(error);
});