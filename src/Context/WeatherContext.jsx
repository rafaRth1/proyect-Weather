import { useState, createContext, useEffect } from 'react';
import { getLocationDefault } from '../Api/getLocationDefault';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
   const [data, setData] = useState({
      name: '',
      icon: '',
      temp_c: '',
      nameTemperature: '',
      humidity: 0,
      wind_mph: 0,
      vis_miles: 0,
      pressure_mb: 0,
      dataAll: {},
   });
   const [forecasts, setForecasts] = useState([]);
   const [showSearchContainer, setshowSearchContainer] = useState(true);
   const [celOrFaren, setCelOrFaren] = useState(false);
   const [localTime, setLocalTime] = useState('');

   // Ejecutando peticion local
   try {
      useEffect(() => {
         const locationDefault = async () => {
            const DATA = await getLocationDefault();
            setData({
               name: DATA.location.country,
               icon: DATA.current.condition.icon,
               temp_c: DATA.current.temp_c,
               nameTemperature: DATA.current.condition.text,
               humidity: DATA.current.humidity,
               wind_mph: DATA.current.wind_mph,
               vis_miles: DATA.current.vis_miles,
               pressure_mb: DATA.current.pressure_mb,
               dataAll: { DATA },
            });

            setForecasts([...DATA.forecast.forecastday]);
            setLocalTime(DATA.location.localtime);
         };
         locationDefault();
      }, []);
   } catch (error) {
      console.log(error);
   }

   return (
      <WeatherContext.Provider
         value={{
            data,
            setData,
            forecasts,
            setForecasts,
            showSearchContainer,
            setshowSearchContainer,
            celOrFaren,
            setCelOrFaren,
            localTime,
         }}
      >
         {children}
      </WeatherContext.Provider>
   );
};

export { WeatherProvider };
export default WeatherContext;
