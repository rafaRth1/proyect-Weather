import clienteAxios from '../Config/axios';
import { KEY_API } from '../Key/index';

export const getLocationSearch = async (country) => {
   try {
      const url = await clienteAxios.get(`/forecast.json?key=${KEY_API}&q=${country}&days=5`);
      const { data } = url;

      return data;
   } catch (error) {
      console.log(error);
   }
};
