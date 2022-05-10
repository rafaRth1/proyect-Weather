import { useState } from 'react';
import Spinner from './Spinner';
import useWeather from '../Hooks/useWeather';
import { getLocationDefault } from '../Api/getLocationDefault';
import { MdLocationOn } from 'react-icons/md';
import { MdGpsFixed } from 'react-icons/md';

const Search = () => {
   const { data, setData, setForecasts, setshowSearchContainer, localTime } = useWeather();

   const handleLocation = async () => {
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
   };

   return (
      <div className='z-10'>
         <div className='search flex justify-between'>
            <div id='places' className='p-2  bg-zinc-500 text-white'>
               <button onClick={() => setshowSearchContainer(false)}>Search of Places</button>
            </div>
            <div className='auto-ubication cursor-pointer'>
               <MdGpsFixed color='white' size={30} onClick={() => handleLocation()} />
            </div>
         </div>

         <div className='flex flex-col items-center'>
            {data.icon ? (
               <img src={data.icon} alt='Icon Weather' style={{ width: '200px' }} className='my-20' />
            ) : (
               <div className='my-40'>
                  <Spinner />
               </div>
            )}

            <div className='flex flex-col items-center'>
               <div className='temp_c'>
                  <span className='text-white text-8xl'>{data.temp_c}</span>
                  <span className='text-white text-6xl'>°C</span>
               </div>

               <div className='name-temperature text-neutral-400 text-4xl mt-20 mb-20'>
                  {data.nameTemperature}
               </div>

               <div className='flex flex-col items-center text-neutral-400 text-4xl'>
                  <div className='flex m-1 text-2xl'>
                     <span>Today</span>
                     <span className='mx-2'>.</span>
                     <span>{localTime}</span>
                  </div>
                  <div className='name-country flex items-center'>
                     <MdLocationOn size={25} />
                     <span className='text-2xl'>{data.name}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Search;
