import clienteAxios from '../Config/axios';
import useWeather from '../Hooks/useWeather';
import { KEY_API } from '../Key/index';

export const GetExample = async (country = 'Lima') => {
   const { data } = useWeather();

   try {
      const url = await clienteAxios.get(`/forecast.json?key=${KEY_API}&q=${country}&days=5`);
      const { data } = url;

      console.log(data);
   } catch (error) {
      console.log(error);
   }

   return <div>{console.log(data)}</div>;
};
