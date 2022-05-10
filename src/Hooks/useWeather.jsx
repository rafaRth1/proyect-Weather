import { useContext } from 'react';
import WeatherContext from '../Context/WeatherContext';

const useWeather = () => {
   return useContext(WeatherContext);
};

export default useWeather;
