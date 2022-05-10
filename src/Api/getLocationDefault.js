import clienteAxios from '../Config/axios';
import { KEY_API } from '../Key/index';
import useWeather from '../Hooks/useWeather';

export const getLocationDefault = async () => {
   try {
      const coord = JSON.parse(localStorage.getItem('coords'));
      const url = await clienteAxios.get(`/forecast.json?key=${KEY_API}&q=${coord.lat},${coord.long}&days=5`);
      const { data } = url;

      return data;
   } catch (error) {
      console.log(error);
   }
};
