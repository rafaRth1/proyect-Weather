import axios from 'axios';

const clientAxios = axios.create({
   baseURL: 'http://api.weatherapi.com/v1',
});

export default clientAxios;
